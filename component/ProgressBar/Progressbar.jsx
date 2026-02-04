import React from "react";
import { FaCheck } from "react-icons/fa";

function Progressbar({ currentStep }) {
  const totalSteps = 6;

  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  console.log("percentage",percentage)

  const steps = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4"},
    { id: 5, label: "5" },
    { id: 6, label: "✔", isComplete: true },
  ];

  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span>
          {currentStep < 6
            ? `Step ${currentStep} of 6`
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
              ${step.isComplete && currentStep === 6 ? "complete" : ""}
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
