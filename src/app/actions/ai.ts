"use server";

import { generateInsights, AiNarrativeToolInput } from "@/ai/flows/ai-narrative-tool";
import { generateModelExplanation, GenerateModelExplanationInput } from "@/ai/flows/model-test-explanation";

export async function getAiInsights(input: AiNarrativeToolInput) {
    try {
        const result = await generateInsights(input);
        return result;
    } catch (error) {
        console.error(error);
        return { insights: "An error occurred while generating insights." };
    }
}

export async function getModelExplanation(input: GenerateModelExplanationInput) {
    try {
        const result = await generateModelExplanation(input);
        return result;
    } catch (error) {
        console.error(error);
        return { shapSummary: "Error", narrativeExplanation: "An error occurred while generating the explanation." };
    }
}

export type ParsedTrainingPlan = {
    problemCategorization: string | null;
    modelSelection: string | null;
    dataSplitting: string | null;
    hyperparameterTuning: string | null;
    evaluationMetric: string | null;
};

// Production-safe deterministic parser for training prompts
export async function parseTrainingPrompt(prompt: string): Promise<ParsedTrainingPlan> {
    const text = (prompt || "").toLowerCase();

    const includes = (arr: string[]) => arr.some((k) => text.includes(k));

    // Problem categorization
    let problem: string | null = null;
    if (includes(["classification", "classify", "classifier", "predict class"])) problem = "classification";
    else if (includes(["regression", "regress", "continuous target"])) problem = "regression";
    else if (includes(["time-series", "timeseries", "forecast", "prophet"])) problem = "time-series";
    else if (includes(["cluster", "clustering", "kmeans"])) problem = "clustering";

    // Model selection
    let model: string | null = null;
    if (includes(["randomforest", "random forest"])) model = "RandomForest";
    else if (includes(["xgboost"])) model = "XGBoost";
    else if (includes(["lightgbm", "light g b m"])) model = "LightGBM";
    else if (includes(["catboost"])) model = "CatBoost";
    else if (includes(["svm", "support vector"])) model = "SVM";
    else if (includes(["logistic"])) model = "LogisticRegression";
    else if (includes(["prophet"])) model = "Prophet";
    else if (includes(["automl", "auto ml"])) model = "AutoML";

    // Data splitting
    let split: string | null = null;
    if (includes(["k-fold", "kfold", "cross-validation"])) split = "k-fold";
    else if (includes(["time-based", "time split", "temporal"])) split = "time-based";
    else if (includes(["train/test", "train test", "holdout", "reserve"])) split = "train/test";

    // Hyperparameter tuning
    let tuning: string | null = null;
    if (includes(["grid", "grid search"])) tuning = "grid";
    else if (includes(["random search"])) tuning = "random";
    else if (includes(["bayesian"])) tuning = "bayesian";
    else if (includes(["hyperband"])) tuning = "hyperband";
    else if (includes(["asha"])) tuning = "ASHA";

    // Evaluation metric
    let metric: string | null = null;
    if (includes(["accuracy"])) metric = "accuracy";
    else if (includes(["f1", "f-1"])) metric = "F1";
    else if (includes(["auc", "roc"])) metric = "AUC-ROC";
    else if (includes(["mae"])) metric = "MAE";
    else if (includes(["mse"])) metric = "MSE";
    else if (includes(["rmse"])) metric = "RMSE";
    else if (includes(["r2", "r-squared"])) metric = "R2";

    return {
        problemCategorization: problem,
        modelSelection: model,
        dataSplitting: split,
        hyperparameterTuning: tuning,
        evaluationMetric: metric,
    };
}