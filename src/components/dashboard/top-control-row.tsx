import { ControlCard } from "./control-card";

export function TopControlRow() {
    const controls = [
        { label: "Problem Categorization", value: "Classification" },
        { label: "Model Selection", value: "AutoML (Ensemble)" },
        { label: "Data Splitting", value: "Train/Val/Test" },
        { label: "Hyperparameter Tuning", value: "Bayesian Optimization" },
        { label: "Evaluation Metric", value: "AUC-ROC" },
    ];

    return (
        <div className="flex flex-wrap gap-5">
            {controls.map(control => (
                <ControlCard key={control.label} label={control.label} value={control.value} />
            ))}
        </div>
    );
}
