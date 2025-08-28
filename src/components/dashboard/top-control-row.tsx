
import { ControlCard } from "./control-card";

const problemCategorizationOptions = [
    { value: "classification", label: "Classification" },
    { value: "regression", label: "Regression" },
    { value: "clustering", label: "Clustering" },
    { value: "reinforcement_learning", label: "Reinforcement Learning" },
];

const modelSelectionOptions = [
    { value: "logistic_regression", label: "Logistic Regression" },
    { value: "decision_tree", label: "Decision Tree" },
    { value: "random_forest", label: "Random Forest" },
    { value: "xgboost", label: "XGBoost" },
    { value: "lightgbm", label: "LightGBM" },
    { value: "automl", label: "AutoML" },
];

const dataSplittingOptions = [
    { value: "train_test", label: "Train/Test Split" },
    { value: "train_val_test", label: "Train/Validation/Test Split" },
    { value: "stratified_k_fold", label: "Stratified K-Fold" },
    { value: "time_based", label: "Time-based Split" },
];

const hyperparameterTuningOptions = [
    { value: "manual", label: "Manual Search" },
    { value: "grid", label: "Grid Search" },
    { value: "random", label: "Random Search" },
    { value: "bayesian", label: "Bayesian Optimization" },
    { value: "population", label: "Population-based Tuning" },
];

const evaluationMetricOptions = [
    { value: "accuracy", label: "Accuracy" },
    { value: "precision", label: "Precision" },
    { value: "recall", label: "Recall" },
    { value: "f1_score", label: "F1-Score" },
    { value: "auc_roc", label: "AUC-ROC" },
    { value: "mae", label: "Mean Absolute Error (MAE)" },
    { value: "mse", label: "Mean Squared Error (MSE)" },
    { value: "r_squared", label: "R-squared" },
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
