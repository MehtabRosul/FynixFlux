
import { ControlCard } from "./control-card";

const problemCategorizationOptions = [
    { value: "Classification", label: "Classification" },
    { value: "Regression", label: "Regression" },
    { value: "Clustering", label: "Clustering" },
    { value: "Reinforcement Learning", label: "Reinforcement Learning" },
];

const modelSelectionOptions = [
    { value: "Simple, interpretable models", label: "Simple, interpretable models" },
    { value: "Complex, high-performance models", label: "Complex, high-performance models" },
    { value: "Unsupervised algorithms", label: "Unsupervised algorithms" },
    { value: "Ensemble methods", label: "Ensemble methods" },
];

const dataSplittingOptions = [
    { value: "Simple train-test split", label: "Simple train-test split" },
    { value: "Train-validation-test split", label: "Train-validation-test split" },
    { value: "Stratified split", label: "Stratified split" },
    { value: "K-fold cross-validation", label: "K-fold cross-validation" },
];

const hyperparameterTuningOptions = [
    { value: "Manual search", label: "Manual search" },
    { value: "Grid search", label: "Grid search" },
    { value: "Random search", label: "Random search" },
    { value: "Bayesian optimization", label: "Bayesian optimization" },
];

const evaluationMetricOptions = [
    { value: "Classification metrics", label: "Classification metrics" },
    { value: "Regression metrics", label: "Regression metrics" },
    { value: "AUC-ROC", label: "AUC-ROC" },
    { value: "Business-aligned metrics", label: "Business-aligned metrics" },
];


export function TopControlRow() {
    const controls = [
        { label: "Problem Categorization", value: "Classification", options: problemCategorizationOptions },
        { label: "Model Selection", value: "AutoML (Ensemble)", options: modelSelectionOptions },
        { label: "Data Splitting", value: "Train/Val/Test", options: dataSplittingOptions },
        { label: "Hyperparameter Tuning", value: "Bayesian Optimization", options: hyperparameterTuningOptions },
        { label: "Evaluation Metric", value: "AUC-ROC", options: evaluationMetricOptions },
    ];

    return (
        <div className="flex flex-wrap gap-5">
            {controls.map(control => (
                <ControlCard 
                    key={control.label} 
                    label={control.label} 
                    defaultValue={control.value}
                    options={control.options}
                />
            ))}
        </div>
    );
}
