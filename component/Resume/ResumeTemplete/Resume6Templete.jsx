import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { resume1Data } from "@/Helper/Helper";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Resume6Template = () => {
  const {
    name,
    role,
    contact,
    about,
    education = [],
    experience = [],
    skills = [],
    references = [],
    language = [],
    passportImage,
  } = resume1Data || {};

  return (
    <div className="resume6-container">

      {/* ================= HEADER ================= */}
      <header className="resume6-header">
        <div className="resume6-header-bg"></div>

        <div className="resume6-profile-wrapper">
          <Image
            src={passportImage || "/img/userImg.jpg"}
            alt="Profile"
            width={160}
            height={160}
            style={{ objectFit: "fill" }}
          />
        </div>

        <div className="resume6-title-content">
          {name && <h1 className="resume6-name">{name}</h1>}
          {role && <p className="resume6-job-title-header">{role}</p>}
        </div>
      </header>

      {/* ================= BODY ================= */}
      <Container fluid className="p-0">
        <Row className="m-0">

          {/* ================= SIDEBAR ================= */}
          <Col xs={4} className="resume6-sidebar-col">

            {/* CONTACT */}
            <section className="mb-5">
              {contact?.phone && (
                <div className="resume6-contact-row">
                  <FaPhoneAlt className="resume6-contact-icon" />
                  <span>{contact.phone}</span>
                </div>
              )}

              {contact?.email && (
                <div className="resume6-contact-row">
                  <FaEnvelope className="resume6-contact-icon" />
                  <span>{contact.email}</span>
                </div>
              )}

              {contact?.address && (
                <div className="resume6-contact-row">
                  <FaMapMarkerAlt className="resume6-contact-icon" />
                  <span>{contact.address}</span>
                </div>
              )}
            </section>

            {/* EDUCATION */}
            {education.length > 0 && (
              <section className="mb-5">
                <h2 className="resume6-sidebar-header">Education</h2>
                {education.map((edu, idx) => (
                  <div key={idx} className="mb-3">
                    <p className="fw-bold mb-0" style={{ fontSize: "11pt" }}>
                      {edu.degree}
                    </p>
                    <p
                      className="mb-0"
                      style={{ fontSize: "10pt", color: "#475569" }}
                    >
                      {edu.institute}
                    </p>
                    <p style={{ fontSize: "9pt", color: "#64748b" }}>
                      {edu.year}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* SKILLS */}
            {skills.length > 0 && (
              <section className="mb-5">
                <h2 className="resume6-sidebar-header">Skills</h2>
                <ul className="ps-3" style={{ fontSize: "10pt", lineHeight: "2" }}>
                  {skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* LANGUAGE */}
            {language.length > 0 && (
              <section>
                <h2 className="resume6-sidebar-header">Language</h2>
                <ul
                  className="list-unstyled ps-0"
                  style={{ fontSize: "10pt", lineHeight: "2" }}
                >
                  {language.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </section>
            )}
          </Col>

          {/* ================= MAIN CONTENT ================= */}
          <Col xs={8} className="resume6-main-col">

            {/* ABOUT */}
            {about && (
              <section className="mb-5">
                <h2 className="resume6-section-title">About Me</h2>
                <p className="resume6-list-items">{about}</p>
              </section>
            )}

            {/* EXPERIENCE */}
            {experience.length > 0 && (
              <section className="mb-5">
                <h2 className="resume6-section-title">Work Experience</h2>

                {experience.map((job, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="resume6-exp-date">{job.year}</p>
                    <p className="resume6-company-name">{job.company}</p>
                    <h3 className="resume6-role-text">{job.role}</h3>

                    {job.description && (
                      <ul className="ps-3 resume6-list-items">
                        <li>{job.description}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* REFERENCES */}
            {references.length > 0 && (
              <section>
                <h2 className="resume6-section-title">References</h2>
                <Row>
                  {references.map((ref, idx) => (
                    <Col key={idx} xs={6}>
                      <p className="resume6-ref-name">{ref.name}</p>
                      <p
                        className="text-muted mb-2"
                        style={{ fontSize: "9.5pt" }}
                      >
                        {ref.role}
                      </p>

                      {ref.phone && (
                        <p className="mb-0" style={{ fontSize: "9pt" }}>
                          <strong>Phone:</strong> {ref.phone}
                        </p>
                      )}

                      {ref.email && (
                        <p style={{ fontSize: "9pt" }}>
                          <strong>Email:</strong> {ref.email}
                        </p>
                      )}
                    </Col>
                  ))}
                </Row>
              </section>
            )}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume6Template;
