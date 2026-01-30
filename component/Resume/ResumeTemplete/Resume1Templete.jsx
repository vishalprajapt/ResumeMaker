import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function ResumeTemplateOne() {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("resumeData")) || {};
      setData(stored);
    } catch (err) {
      console.error("Resume data error");
    }
  }, []);

  const {
    name,
    role,
    contact = {},
    about,
    education = [],
    experience = [],
    skills = [],
    references = [],
  } = data;

  return (
    <div className="resume-page resume1">
      {/* HEADER */}
      {name && <h1 className="name">{name}</h1>}
      {role && <p className="role">{role}</p>}

      {(contact.phone || contact.address || contact.email) && (
        <div className="contact">
          {contact.phone && (
            <span style={{ display: "flex", gap: "3px" }}>
              <FaPhone />
              <span>{contact.phone}</span>
            </span>
          )}

          {contact.address && (
            <span style={{ display: "flex", gap: "3px" }}>
              <IoLocation />
              <span>{contact.address}</span>
            </span>
          )}

          {contact.email && (
            <span style={{ display: "flex", gap: "3px" }}>
              <MdOutlineMail />
              <span>{contact.email}</span>
            </span>
          )}
        </div>
      )}

      {/* ABOUT */}
      {about && (
        <Section title="ABOUT ME">
          <p>{about}</p>
        </Section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <Section title="EDUCATION">
          {education.map((item, i) => (
            <Row
              key={i}
              left={`${item?.year || ""}${item?.institute ? " • " + item.institute : ""}`}
            >
              {item?.degree && <h4>{item.degree}</h4>}
              {item?.description && <p>{item.description}</p>}
            </Row>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <Section title="EXPERIENCE">
          {experience.map((item, i) => (
            <Row
              key={i}
              left={`${item?.year || ""}${item?.company ? " • " + item.company : ""}`}
            >
              {item?.role && <h4>{item.role}</h4>}
              {item?.description && <p>{item.description}</p>}
            </Row>
          ))}
        </Section>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <Section title="SKILLS">
          <ul className="skills">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* REFERENCES */}
      {references.length > 0 && (
        <Section title="REFERENCES">
          <div className="references">
            {references.map((ref, i) => (
              <div key={i}>
                {ref?.name && <h4>{ref.name}</h4>}
                {ref?.role && <p>{ref.role}</p>}
                {ref?.phone && <p><b>Phone:</b> {ref.phone}</p>}
                {ref?.social && <p><b>Social:</b> {ref.social}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

export default ResumeTemplateOne;

/* Reusable Components */
const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

const Row = ({ left, children }) => (
  <div className="row">
    <div className="left">{left}</div>
    <div className="right">{children}</div>
  </div>
);
