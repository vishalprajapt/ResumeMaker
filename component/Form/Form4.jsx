import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Form4({ onComplete, UserId }) {
  const router = useRouter();

  const [showRefForm, setShowRefForm] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);

  const [references, setReferences] = useState([]);
  const [projects, setProjects] = useState([]);

  const [refInput, setRefInput] = useState({
    name: "",
    role: "",
    phone: "",
    social: "",
  });

  const [projectInput, setProjectInput] = useState({
    title: "",
    link: "",
    description: "",
  });

  // 🔹 LOAD data from localStorage (BACK button support)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));

    if (savedData) {
      if (Array.isArray(savedData.references)) {
        setReferences(savedData.references);
      }
      if (Array.isArray(savedData.projects)) {
        setProjects(savedData.projects);
      }
    }
  }, []);

  // ================= Reference =================
  const handleAddReference = () => {
    if (!refInput.name) return;

    setReferences((prev) => [...prev, refInput]);
    setRefInput({ name: "", role: "", phone: "", social: "" });
    setShowRefForm(false);
  };

  // ================= Project =================
  const handleAddProject = () => {
    if (!projectInput.title) return;

    setProjects((prev) => [...prev, projectInput]);
    setProjectInput({ title: "", link: "", description: "" });
    setShowLinkForm(false);
  };

  // ================= Save =================
  const handleSaveForm4 = () => {
    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      references,
      projects,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));
    onComplete();

    setTimeout(() => {
      router.push(`ResumeProfile/${UserId}`);
    }, 1000);
  };

  return (
    <div className="form4-wrapper">
      <h2 className="form4-title">References & Projects</h2>

      {/* ================= Reference Section ================= */}
      <button
        className="form4-btn"
        onClick={() => setShowRefForm(!showRefForm)}
      >
        + Add Reference
      </button>

      {showRefForm && (
        <div className="form4-popup">
          <input
            className="form4-input"
            placeholder="Name"
            value={refInput.name}
            onChange={(e) =>
              setRefInput({ ...refInput, name: e.target.value })
            }
          />
          <input
            className="form4-input"
            placeholder="Role"
            value={refInput.role}
            onChange={(e) =>
              setRefInput({ ...refInput, role: e.target.value })
            }
          />
          <input
            className="form4-input"
            placeholder="Phone"
            value={refInput.phone}
            onChange={(e) =>
              setRefInput({ ...refInput, phone: e.target.value })
            }
          />
          <input
            className="form4-input"
            placeholder="Social / LinkedIn"
            value={refInput.social}
            onChange={(e) =>
              setRefInput({ ...refInput, social: e.target.value })
            }
          />

          <button className="form4-save-btn" onClick={handleAddReference}>
            Save Reference
          </button>
        </div>
      )}

      {/* Reference Preview */}
      {references.map((ref, i) => (
        <div key={i} className="form4-preview">
          <strong>{ref.name}</strong> — {ref.role}
        </div>
      ))}

      {/* ================= Project Section ================= */}
      <button
        className="form4-btn"
        onClick={() => setShowLinkForm(!showLinkForm)}
      >
        + Add Project / Link
      </button>

      {showLinkForm && (
        <div className="form4-popup">
          <input
            className="form4-input"
            placeholder="Project Title"
            value={projectInput.title}
            onChange={(e) =>
              setProjectInput({ ...projectInput, title: e.target.value })
            }
          />
          <input
            className="form4-input"
            placeholder="Project URL"
            value={projectInput.link}
            onChange={(e) =>
              setProjectInput({ ...projectInput, link: e.target.value })
            }
          />
          <textarea
            className="form4-textarea"
            placeholder="Project Description"
            value={projectInput.description}
            onChange={(e) =>
              setProjectInput({
                ...projectInput,
                description: e.target.value,
              })
            }
          />

          <button className="form4-save-btn" onClick={handleAddProject}>
            Save Project
          </button>
        </div>
      )}

      {/* Project Preview */}
      {projects.map((item, i) => (
        <div key={i} className="form4-preview">
          <strong>{item.title}</strong> — {item.link}
        </div>
      ))}

      <button className="form4-finish-btn" onClick={handleSaveForm4}>
        Finish Form 4
      </button>
    </div>
  );
}

export default Form4;
