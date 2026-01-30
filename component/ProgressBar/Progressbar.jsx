import React from "react";
import { FaCheck } from "react-icons/fa";

function Progressbar({ currentStep }) {
  const totalSteps = 4;

  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const steps = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "✔", isComplete: true },
  ];

  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span>
          {currentStep < 4
            ? `Step ${currentStep} of 3`
            : "Completed Successfully 🎉"}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="progress-steps">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`progress-step
              ${currentStep >= step.id ? "active" : ""}
              ${step.isComplete && currentStep === 4 ? "complete" : ""}
            `}
          >
            {step.isComplete ? <FaCheck /> : step.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progressbar;
