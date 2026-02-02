import React, { useState, useEffect } from "react";

function Form5({ onComplete }) {
  const [type, setType] = useState(""); // experience | fresher
  const [experienceList, setExperienceList] = useState([
    { year: "", company: "", role: "", description: "" },
  ]);

  // 🔹 LOAD DATA FROM LOCALSTORAGE
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));

    if (savedData?.experience) {
      if (savedData.experience === "fresher") {
        setType("fresher");
      } else {
        setType("experience");
        setExperienceList(savedData.experience);
      }
    }
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...experienceList];
    updated[index][field] = value;
    setExperienceList(updated);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      { year: "", company: "", role: "", description: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experienceList.filter((_, i) => i !== index);
    setExperienceList(updated);
  };

  const handleSubmit = () => {
    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      experience:
        type === "fresher"
          ? "fresher"
          : experienceList.filter(
              (exp) =>
                exp.year || exp.company || exp.role || exp.description
            ),
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));
    onComplete && onComplete();
  };

  return (
    <div className="form-card form5_container">
      <h2 className="form5_title">Work Experience</h2>

      {/* Type Selection */}
      <div className="form5_type_selector">
        <button
          className={`form5_type_btn ${
            type === "experience" ? "active" : ""
          }`}
          onClick={() => setType("experience")}
        >
          Experienced
        </button>

        <button
          className={`form5_type_btn ${
            type === "fresher" ? "active" : ""
          }`}
          onClick={() => setType("fresher")}
        >
          Fresher
        </button>
      </div>

      {/* Fresher */}
      {type === "fresher" && (
        <div className="form5_fresher_box">
          <p className="form5_fresher_text">
            You are marked as a <strong>Fresher</strong>.
            No work experience will be added.
          </p>
        </div>
      )}

      {/* Experience */}
      {type === "experience" &&
        experienceList.map((exp, index) => (
          <div className="form5_experience_card" key={index}>
            <input
              className="form5_input"
              placeholder="Year (e.g. 2023 - Now)"
              value={exp.year}
              onChange={(e) =>
                handleChange(index, "year", e.target.value)
              }
            />

            <input
              className="form5_input"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) =>
                handleChange(index, "company", e.target.value)
              }
            />

            <input
              className="form5_input"
              placeholder="Role"
              value={exp.role}
              onChange={(e) =>
                handleChange(index, "role", e.target.value)
              }
            />

            <textarea
              className="form5_textarea"
              placeholder="Description"
              rows="3"
              value={exp.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />

            {experienceList.length > 1 && (
              <button
                className="form5_remove_btn"
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

      {/* Add Experience */}
      {type === "experience" && (
        <button className="form5_add_btn" onClick={addExperience}>
          + Add Experience
        </button>
      )}

      <button className="primary-btn form5_submit_btn" onClick={handleSubmit}>
        Save & Continue
      </button>
    </div>
  );
}

export default Form5;
