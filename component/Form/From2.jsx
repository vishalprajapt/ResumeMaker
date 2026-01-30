import React, { useState } from "react";

function FormTwo({ onComplete }) {
  const [edu, setEdu] = useState({
    year: "",
    institute: "",
    degree: "",
    description: "",
  });

  const addEducation = () => {
    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      education: [...(oldData.education || []), edu],
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    // Reset fields
    onComplete()
    setEdu({
      year: "",
      institute: "",
      degree: "",
      description: "",
    });
  };

  return (
    <div className="form-card form-two">
      <h2 className="form-two-title">Education</h2>

      <input
        className="form-two-input"
        placeholder="Year (e.g. 2020 - 2023)"
        value={edu.year}
        onChange={(e) => setEdu({ ...edu, year: e.target.value })}
      />

      <input
        className="form-two-input"
        placeholder="Institute"
        value={edu.institute}
        onChange={(e) => setEdu({ ...edu, institute: e.target.value })}
      />

      <input
        className="form-two-input"
        placeholder="Degree"
        value={edu.degree}
        onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
      />

      <textarea
        className="form-two-textarea"
        placeholder="Description"
        value={edu.description}
        onChange={(e) => setEdu({ ...edu, description: e.target.value })}
      />

      <div className="form-two-actions">
        
        <button className="form-two-btn next-btn" onClick={addEducation}>
          Next
        </button>
      </div>
    </div>
  );
}

export default FormTwo;
