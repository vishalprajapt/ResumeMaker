import React, { useState } from "react";
import { useRouter } from "next/router";

function FormThree({ UserId }) {
  const router = useRouter();

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const [languages, setLanguages] = useState([]);
  const [languageInput, setLanguageInput] = useState("");

  // 🔹 Handle Enter / Comma / Space
  const handleKeyDown = (e, type) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();

      const value = e.target.value.trim();
      if (!value) return;

      if (type === "skill") {
        setSkills([...skills, value]);
        setSkillInput("");
      } else {
        setLanguages([...languages, value]);
        setLanguageInput("");
      }
    }
  };


  const removeTag = (index, type) => {
    if (type === "skill") {
      setSkills(skills.filter((_, i) => i !== index));
    } else {
      setLanguages(languages.filter((_, i) => i !== index));
    }
  };

  const submitFinal = () => {
    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      skills,
      language: languages,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));
    alert("Resume Data Completed");

    setTimeout(() => {
      router.push(`ResumeProfile/${UserId}`);
    }, 1000);
  };

  return (
    <div className="form-card form-three">
      <h2 className="form-three-title">Experience & Skills</h2>

      {/* 🔹 Skills */}
      <div className="tag-input">
        {skills.map((skill, index) => (
          <span className="tag" key={index}>
            {skill}
            <button onClick={() => removeTag(index, "skill")}>×</button>
          </span>
        ))}
        <input
          type="text"
          placeholder="Type skill and press space"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "skill")}
        />
      </div>

      {/* 🔹 Languages */}
      <div className="tag-input">
        {languages.map((lang, index) => (
          <span className="tag" key={index}>
            {lang}
            <button onClick={() => removeTag(index, "language")}>×</button>
          </span>
        ))}
        <input
          type="text"
          placeholder="Type language and press space"
          value={languageInput}
          onChange={(e) => setLanguageInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "language")}
        />
      </div>

      <button className="form-three-btn finish-btn" onClick={submitFinal}>
        Finish
      </button>
    </div>
  );
}

export default FormThree;
