import React from "react";
import { resume1Data } from "@/Helper/Helper";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


function ResumeTemplateOne() {
  const {
    name,
    role,
    contact,
    about,
    education,
    experience,
    skills,
    references,
  } = resume1Data;

  return (
    <div className="resume-page resume1">
      {/* HEADER */}
      <h1 className="name">{name}</h1>
      <p className="role">{role}</p>

      <div className="contact">
        <span style={{display:"flex",gap:"3px"}}><span><FaPhone/></span><span>{contact.phone}</span></span>
       <span style={{display:"flex",gap:"3px"}}> <span><IoLocation/></span><span>{contact.address}</span></span>
        <span style={{display:"flex",gap:"3px"}}> <span><MdOutlineMail/></span> <span>{contact.email}</span></span>
      </div>

      {/* ABOUT */}
      <Section title="ABOUT ME">
        <p>{about}</p>
      </Section>

      {/* EDUCATION */}
      <Section title="EDUCATION">
        {education.map((item, i) => (
          <Row key={i} left={item.year + " • " + item.institute}>
            <h4>{item.degree}</h4>
            <p>{item.description}</p>
          </Row>
        ))}
      </Section>

      {/* EXPERIENCE */}
      <Section title="EXPERIENCE">
        {experience.map((item, i) => (
          <Row key={i} left={item.year + " • " + item.company}>
            <h4>{item.role}</h4>
            <p>{item.description}</p>
          </Row>
        ))}
      </Section>

      {/* SKILLS */}
      <Section title="SKILLS">
        <ul className="skills">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </Section>

      {/* REFERENCES */}
      <Section title="REFERENCES">
        <div className="references">
          {references.map((ref, i) => (
            <div key={i}>
              <h4>{ref.name}</h4>
              <p>{ref.role}</p>
              <p><b>Phone:</b> {ref.phone}</p>
              <p><b>Social:</b> {ref.social}</p>
            </div>
          ))}
        </div>
      </Section>
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
