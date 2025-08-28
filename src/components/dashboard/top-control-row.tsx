
import { ControlCard } from "./control-card";

const problemCategorizationOptions = [
    { value: "classification", label: "Classification" },
    { value: "regression", label: "Regression" },
    { value: "clustering", label: "Clustering" },
    { value: "time_series_forecasting", label: "Time Series Forecasting" },
    { value: "reinforcement_learning", label: "Reinforcement Learning" },
    { value: "object_detection", label: "Object Detection" },
    { value: "nlp", label: "Natural Language Processing (NLP)" },
    { value: "anomaly_detection", label: "Anomaly Detection" },
    { value: "recommendation_systems", label: "Recommendation Systems" },
    { value: "multilabel_classification", label: "Multi-Label Classification" },
];

const modelSelectionOptions = [
    { value: "automl", label: "AutoML" },
    { value: "logistic_regression", label: "Logistic Regression" },
    { value: "decision_tree", label: "Decision Tree" },
    { value: "random_forest", label: "Random Forest" },
    { value: "xgboost", label: "XGBoost" },
    { value: "lightgbm", label: "LightGBM" },
    { value: "catboost", label: "CatBoost" },
    { value: "tabnet", label: "TabNet" },
    { value: "prophet", label: "Prophet" },
    { value: "n_beats", label: "N-BEATS" },
    { value: "svm", label: "Support Vector Machine (SVM)" },
];

const dataSplittingOptions = [
    { value: "train_test", label: "Train/Test Split" },
    { value: "train_val_test", label: "Train/Validation/Test Split" },
    { value: "stratified_k_fold", label: "Stratified K-Fold" },
    { value: "repeated_k_fold", label: "Repeated K-Fold" },
    { value: "time_based", label: "Time-based Split" },
    { value: "group_k_fold", label: "Group K-Fold" },
    { value: "leave_one_out", label: "Leave-One-Out Cross-Validation" },
    { value: "time_series_rolling", label: "Time Series Split (Rolling Window)" },
    { value: "nested_cross_validation", label: "Nested Cross-Validation" },
];

const hyperparameterTuningOptions = [
    { value: "manual", label: "Manual Search" },
    { value: "grid", label: "Grid Search" },
    { value: "random", label: "Random Search" },
    { value: "bayesian", label: "Bayesian Optimization" },
    { value: "population", label: "Population-based Tuning" },
    { value: "hyperband", label: "Hyperband" },
    { value: "cma_es", label: "CMA-ES" },
    { value: "tpe", label: "TPE (Tree-structured Parzen Estimator)" },
    { value: "asha", label: "ASHA" },
];

const evaluationMetricOptions = [
    { value: "accuracy", label: "Accuracy" },
    { value: "balanced_accuracy", label: "Balanced Accuracy" },
    { value: "precision", label: "Precision" },
    { value: "recall", label: "Recall" },
    { value: "f1_score", label: "F1-Score" },
    { value: "auc_roc", label: "AUC-ROC" },
    { value: "mcc", label: "Matthews Correlation Coefficient (MCC)" },
    { value: "log_loss", label: "Log Loss" },
    { value: "mae", label: "Mean Absolute Error (MAE)" },
    { value: "mse", label: "Mean Squared Error (MSE)" },
    { value: "r_squared", label: "R-squared" },
    { value: "rmsle", label: "Root Mean Squared Log Error (RMSLE)" },
    { value: "smape", label: "Symmetric Mean Absolute Percentage Error (SMAPE)" },
];


export function TopControlRow() {
    const controls = [
        { label: "Problem Categorization", options: problemCategorizationOptions },
        { label: "Model Selection", options: modelSelectionOptions },
        { label: "Data Splitting", options: dataSplittingOptions },
        { label: "Hyperparameter Tuning", options: hyperparameterTuningOptions },
        { label: "Evaluation Metric", options: evaluationMetricOptions },
    ];

    return (
        <div className="flex flex-wrap gap-5">
            {controls.map(control => (
                <ControlCard 
                    key={control.label} 
                    label={control.label} 
                    options={control.options}
                />
            ))}
        </div>
    );
}
