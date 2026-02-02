import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function ResumeTemplate2() {
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
    language = [],
    passportImage,
  } = data;


 

  const isExperienceArray = Array.isArray(experience);
const isFresher =
  typeof experience === "string" &&
  experience.toLowerCase().includes("fresher");


  


  // console.log("experience", experience)

  return (
    <div className="resume2-wrapper">
      {/* LEFT SIDEBAR */}
      <div className="resume2-sidebar">
        <div className="resume2-profile-container">
          <Image
            src={passportImage || "/img/userImg.jpg"}
            alt="profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* EDUCATION */}
        {education.length > 0 && (
          <>
            <h3>EDUCATION</h3>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "15px" }}>
                {edu?.institute && (
                  <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                    {edu.institute}
                  </div>
                )}
                {edu?.degree && (
                  <div style={{ fontSize: "12px" }}>{edu.degree}</div>
                )}
                {edu?.year && (
                  <div style={{ fontSize: "11px", opacity: 0.8 }}>
                    {edu.year}
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* SKILLS */}
        {skills.length > 0 && (
          <>
            <h3>SKILL</h3>
            <ul style={{ paddingLeft: "15px", fontSize: "13px" }}>
              {skills.map((skill, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* LANGUAGE */}
        {language.length > 0 && (
          <>
            <h3>language</h3>
            <ul style={{ paddingLeft: "15px", fontSize: "13px" }}>
              {language.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </>
        )}

        {/* REFERENCES */}
        {references.length > 0 && (
          <>
            <h3>REFERENCE</h3>
            {references.map((ref, i) => (
              <div
                key={i}
                style={{ marginBottom: "15px", fontSize: "12px" }}
              >
                {ref?.name && (
                  <div style={{ fontWeight: "bold" }}>{ref.name}</div>
                )}
                {ref?.role && <div>{ref.role}</div>}
                {ref?.phone && <div>{ref.phone}</div>}
                {ref?.social && <div>{ref.social}</div>}
              </div>
            ))}
          </>
        )}
      </div>

      {/* RIGHT CONTENT */}
      <div className="resume2-content">
        {name && <h1>{name}</h1>}
        {role && <h1>{role}</h1>}

        {(contact.phone || contact.address || contact.email) && (
          <div className="resume2-contact-box">
            {contact.phone && (
              <div>
                <FaPhone /> {contact.phone}
              </div>
            )}
            {contact.address && (
              <div>
                <IoLocation /> {contact.address}
              </div>
            )}
            {contact.email && (
              <div>
                <MdOutlineMail /> {contact.email}
              </div>
            )}
          </div>
        )}

        {/* ABOUT */}
        {about && (
          <>
            <h3 className="resume2-body-title">ABOUT ME</h3>
            <p style={{ fontSize: "12px", lineHeight: "1.6" }}>{about}</p>
          </>
        )}

        {/* EXPERIENCE */}
        {/* EXPERIENCE */}
        {(isExperienceArray && experience.length > 0) || isFresher ? (
          <>
            <h3 className="resume2-body-title">WORK EXPERIENCE</h3>

            {/* FRESHER CASE */}
            {isFresher && (
              <p style={{ fontSize: "13px", fontStyle: "italic" }}>
                Fresher – Looking for an opportunity to start my professional career.
              </p>
            )}

            {/* EXPERIENCE ARRAY CASE */}
            {isExperienceArray &&
              experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    {exp?.company && <span>{exp.company}</span>}
                    {exp?.year && <span>{exp.year}</span>}
                  </div>

                  {exp?.role && (
                    <div
                      style={{
                        fontStyle: "italic",
                        fontSize: "13px",
                        margin: "2px 0",
                      }}
                    >
                      {exp.role}
                    </div>
                  )}

                  {exp?.description && (
                    <p style={{ fontSize: "12px" }}>{exp.description}</p>
                  )}
                </div>
              ))}
          </>
        ) : null}

      </div>
    </div>
  );
}

export default ResumeTemplate2;
