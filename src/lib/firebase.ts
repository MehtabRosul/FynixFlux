"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Strictly resolve required fields
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'forgeflow-b76c8';
let databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || 'https://forgeflow-b76c8-default-rtdb.asia-southeast1.firebasedatabase.app';
if (!databaseURL && projectId) {
  databaseURL = `https://${projectId}-default-rtdb.asia-southeast1.firebasedatabase.app`;
}
if (!databaseURL && projectId) {
  databaseURL = `https://${projectId}-default-rtdb.firebaseio.com`;
}

// Build config without undefineds
const firebaseConfig: Record<string, string> = {};
const add = (k: string, v: string | undefined) => {
  if (typeof v === 'string' && v.length > 0) (firebaseConfig as any)[k] = v;
};
add('apiKey', process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyA8BK9fKsCJQXHeKwam8JxSSCoGmPPRsII');
add('authDomain', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'forgeflow-b76c8.firebaseapp.com');
add('projectId', projectId);
add('storageBucket', process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'forgeflow-b76c8.firebasestorage.app');
add('messagingSenderId', process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '358907612610');
add('appId', process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:358907612610:web:497b189c1603ff6378da5b');
add('measurementId', process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-9B165Z4PVK');
add('databaseURL', databaseURL);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = databaseURL ? getDatabase(app, databaseURL) : getDatabase(app);


