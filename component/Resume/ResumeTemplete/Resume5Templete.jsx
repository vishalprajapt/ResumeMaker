import React from "react";
import Image from "next/image";
import { resume1Data } from "@/Helper/Helper";
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Resume5Template = () => {
  const {
    name,
    role,
    contact,
    about,
    education = [],
    experience = [],
    skills = [],
    language = [],
    references = [],
    passportImage,
  } = resume1Data || {};

  const nameParts = name?.split(" ") || [];
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="resume5-container d-flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="resume5-sidebar">

        <div className="resume5-profile-circle text-center">
          <Image
            src={passportImage || "/img/userImg.jpg"}
            alt="Profile"
            width={160}
            height={160}
            style={{ objectFit: "fill" }}
          />
        </div>

        {/* CONTACT */}
        <section className="resume5-sidebar-section">
          <h2 className="resume5-sidebar-title">Contact</h2>

          <div className="d-flex flex-column gap-3" style={{ fontSize: "10pt" }}>
            {contact?.phone && (
              <div className="d-flex align-items-center gap-3">
                <FaPhone size={14} /> {contact.phone}
              </div>
            )}

            {contact?.email && (
              <div className="d-flex align-items-center gap-3">
                <MdOutlineMail size={14} /> {contact.email}
              </div>
            )}

            {contact?.address && (
              <div className="d-flex align-items-center gap-3">
                <IoLocation size={14} /> {contact.address}
              </div>
            )}

            {contact?.website && (
              <div className="d-flex align-items-center gap-3">
                <FaGlobe size={14} /> {contact.website}
              </div>
            )}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume5-sidebar-section">
          <h2 className="resume5-sidebar-title">Education</h2>

          {education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <p className="fw-bold" style={{ fontSize: "11pt" }}>
                {edu.year}
              </p>
              <p className="fw-bold text-uppercase" style={{ fontSize: "9pt" }}>
                {edu.institute}
              </p>
              <p style={{ fontSize: "9pt" }}>{edu.degree}</p>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section className="resume5-sidebar-section">
          <h2 className="resume5-sidebar-title">Skills</h2>
          <ul className="resume5-sidebar-list">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* LANGUAGES */}
        <section className="resume5-sidebar-section">
          <h2 className="resume5-sidebar-title">Languages</h2>
          <ul
            className="resume5-sidebar-list"
            style={{ display: "flex", gap: "20px" }}
          >
            {language.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </section>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="resume5-main">

        {/* HEADER */}
        <header className="mb-4">
          <div className="resume5-header-name">
            <h1>
              {firstName} <span>{lastName}</span>
            </h1>
          </div>
          <div className="resume5-role">{role}</div>
        </header>

        {/* PROFILE */}
        {about && (
          <section className="mb-5">
            <h2 className="resume5-content-title">Profile</h2>
            <p
              className="text-dark lh-base"
              style={{ fontSize: "10.5pt", textAlign: "justify" }}
            >
              {about}
            </p>
          </section>
        )}

        {/* WORK EXPERIENCE */}
        <section className="mb-5">
          <h2 className="resume5-content-title">Work Experience</h2>

          {experience.map((job, idx) => (
            <div key={idx} className="resume5-exp-item mb-4">
              <div
                className="d-flex justify-content-between fw-bold"
                style={{ fontSize: "12pt" }}
              >
                <span>{job.company}</span>
                <span className="text-secondary fw-normal">
                  {job.year}
                </span>
              </div>

              <p className="fst-italic text-muted mb-2">
                {job.role}
              </p>

              <ul
                className="ms-4 text-dark"
                style={{ fontSize: "10pt", listStyleType: "disc" }}
              >
                <li>{job.description}</li>
              </ul>
            </div>
          ))}
        </section>

        {/* REFERENCES */}
        {references.length > 0 && (
          <section>
            <h2 className="resume5-content-title">Reference</h2>

            <div
              className="resume5-reference-grid d-grid"
              style={{ gap: "20px" }}
            >
              {references.map((ref, idx) => (
                <div key={idx}>
                  <p className="fw-bold">{ref.name}</p>
                  <p style={{ fontSize: "9pt" }}>{ref.role}</p>
                  <p className="text-muted mt-1" style={{ fontSize: "8pt" }}>
                    Phone: {ref.phone}
                  </p>
                  {ref.social && (
                    <p className="text-muted" style={{ fontSize: "8pt" }}>
                      {ref.social}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
};

export default Resume5Template;
