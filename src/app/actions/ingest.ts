"use server";

import { parseStringPromise as xmlParseString } from "xml2js";
import YAML from "yaml";
import avro from "avsc";
// Lazy-load exceljs to avoid bundling issues in edge runtimes
let _exceljs: any | null = null;
async function getExcelJS() {
  if (!_exceljs) {
    _exceljs = await import("exceljs");
  }
  return _exceljs as any;
}
// Lazy-load parquetjs with dynamic import to avoid CommonJS require lint
let _parquet: any | null = null;
async function getParquet() {
  if (!_parquet) {
    _parquet = await import("parquetjs");
  }
  return _parquet as any;
}

export type Row = Record<string, string | number>;

function coerce(obj: Record<string, unknown>): Row {
  const out: Row = {};
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "number") out[k] = v;
    else if (typeof v === "string") {
      const n = Number(v);
      out[k] = !Number.isNaN(n) && v.trim() !== "" ? n : v;
    } else if (typeof v === "boolean") out[k] = v ? 1 : 0;
    else out[k] = JSON.stringify(v ?? null);
  }
  return out;
}

export async function ingestFile(file: File): Promise<Row[]> {
  const name = file.name.toLowerCase();
  // Cast to any to satisfy ExcelJS typing in edge runtimes
  const buf: any = Buffer.from(await file.arrayBuffer());

  // Excel support via exceljs (safe alternative to xlsx)
  if (name.endsWith(".xls") || name.endsWith(".xlsx")) {
    const ExcelJS = await getExcelJS();
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(buf);
    const sheet = wb.worksheets[0];
    if (!sheet) return [];
    const rows: Row[] = [];
    const headerRow = sheet.getRow(1);
    const headers: string[] = [];
    headerRow.eachCell((cell: any, colNumber: number) => {
      headers[colNumber - 1] = String(cell.value ?? `col_${colNumber}`);
    });
    for (let r = 2; r <= sheet.rowCount; r++) {
      const row = sheet.getRow(r);
      const obj: Record<string, unknown> = {};
      headers.forEach((h, i) => {
        const cell = row.getCell(i + 1);
        obj[h] = cell.value as unknown as string | number | null;
      });
      rows.push(coerce(obj));
    }
    return rows;
  }

  if (name.endsWith(".parquet")) {
    const { ParquetReader } = await getParquet();
    const reader = await ParquetReader.openBuffer(buf);
    const cursor = reader.getCursor();
    const out: Row[] = [];
    for (let i = 0; i < 5000; i++) {
      const rec = await cursor.next();
      if (!rec) break;
      out.push(coerce(rec as Record<string, unknown>));
    }
    await reader.close();
    return out;
  }

  if (name.endsWith(".avro")) {
    const type = avro.Type.forSchema(JSON.parse(buf.toString()));
    // If file is raw Avro data, this simplistic approach may not apply; expect schema+json records.
    // To keep the demo robust, fall back to JSON parse if not valid avro schema.
    if (type) {
      try {
        const val = type.fromBuffer(buf) as Record<string, unknown> | Record<string, unknown>[];
        const arr = Array.isArray(val) ? val : [val];
        return arr.map(coerce);
      } catch {
        // ignore and try JSON parse below
      }
    }
    const json = JSON.parse(buf.toString());
    const arr = Array.isArray(json) ? json : [json];
    return arr.map(coerce);
  }

  if (name.endsWith(".xml")) {
    const doc = await xmlParseString(buf.toString(), { explicitArray: false, mergeAttrs: true });
    const flat = Array.isArray(doc?.root?.record) ? doc.root.record : (doc?.root ? [doc.root] : [doc]);
    return flat.map((r: Record<string, unknown>) => coerce(r));
  }

  if (name.endsWith(".yaml") || name.endsWith(".yml")) {
    const data = YAML.parse(buf.toString());
    const arr = Array.isArray(data) ? data : [data];
    return arr.map((r: Record<string, unknown>) => coerce(r));
  }

  // Unsupported heavy formats placeholder: ORC, HDF5, NPY/NPZ, Pickle, MDS, Petastorm, GIS/Graph
  // For demo safety, return empty to signal unsupported without crashing
  return [];
}


