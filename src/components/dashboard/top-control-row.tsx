
import { ControlCard } from "./control-card";

const problemCategorizationOptions = [
    { value: "classification", label: "Classification" },
    { value: "regression", label: "Regression" },
    { value: "clustering", label: "Clustering" },
    { value: "reinforcement_learning", label: "Reinforcement Learning" },
];

const modelSelectionOptions = [
    { value: "simple", label: "Simple, interpretable models" },
    { value: "complex", label: "Complex, high-performance models" },
    { value: "unsupervised", label: "Unsupervised algorithms" },
    { value: "ensemble", label: "Ensemble methods" },
];

const dataSplittingOptions = [
    { value: "train_test", label: "Simple train-test split" },
    { value: "train_val_test", label: "Train-validation-test split" },
    { value: "stratified", label: "Stratified split" },
    { value: "k_fold", label: "K-fold cross-validation" },
];

const hyperparameterTuningOptions = [
    { value: "manual", label: "Manual search" },
    { value: "grid", label: "Grid search" },
    { value: "random", label: "Random search" },
    { value: "bayesian", label: "Bayesian optimization" },
];

const evaluationMetricOptions = [
    { value: "classification", label: "Classification metrics" },
    { value: "regression", label: "Regression metrics" },
    { value: "auc_roc", label: "AUC-ROC" },
    { value: "business_aligned", label: "Business-aligned metrics" },
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
