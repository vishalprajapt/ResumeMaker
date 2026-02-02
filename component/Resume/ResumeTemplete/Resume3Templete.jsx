import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function ResumeTemplate3() {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("resumeData")) || {};
      setData(stored);
    } catch (e) {
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
    language = [],
    passportImage,
  } = data;


    const isExperienceArray = Array.isArray(experience);
const isFresher =
  typeof experience === "string" &&
  experience.toLowerCase().includes("fresher");

  return (
    <div className="resume3-wrapper">
      {/* HEADER SECTION */}
      <div className="resume3-header">
        <div className="resume3-header-box">
          <div className="resume3-profile-img">
            <Image
              src={passportImage || "/img/userImg.jpg"}
              alt="profile"
              width={130}
              height={130}
              style={{ objectFit: "fill" }}
            />
          </div>

          <div className="resume3-name-area">
            {name && <h1>{name}</h1>}
            {role && <h2>{role}</h2>}

            {role && (
              <p style={{ fontSize: "13px", opacity: 0.9 }}>
                Professional experience in the field of {role}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="resume3-body">
        {/* LEFT SIDEBAR */}
        <div className="resume3-sidebar">
          {contact.phone && (
            <div className="resume3-contact-item">
              <FaPhone style={{ fontSize: "18px" }} /> {contact.phone}
            </div>
          )}

          {contact.email && (
            <div className="resume3-contact-item">
              <MdOutlineMail style={{ fontSize: "18px" }} /> {contact.email}
            </div>
          )}

          {contact.address && (
            <div className="resume3-contact-item">
              <IoLocation style={{ fontSize: "18px" }} /> {contact.address}
            </div>
          )}

          {/* SKILLS */}
          {skills.length > 0 && (
            <>
              <h3>SKILLS</h3>
              <ul
                style={{
                  paddingLeft: "15px",
                  fontSize: "12px",
                  lineHeight: "1.8",
                }}
              >
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </>
          )}

          {/* LANGUAGES */}
          {language.length > 0 && (
            <>
              <h3>LANGUAGES</h3>
              <ul
                style={{
                  paddingLeft: "15px",
                  fontSize: "12px",
                  lineHeight: "1.8",
                }}
              >
                {language.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="resume3-content">
          {about && (
            <>
              <div className="resume3-section-title">
                Professional Summary
              </div>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "1.5",
                  color: "#333",
                }}
              >
                {about}
              </p>
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

            {isExperienceArray && (
                experience.length > 0 && (
            <>
              <div className="resume3-section-title">Work Experience</div>
              {experience.map((exp, i) => (
                <div key={i} className="resume3-exp-item">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "800",
                      fontSize: "13px",
                    }}
                  >
                    <span>{exp?.company}</span>
                  </div>

                  {exp?.year && (
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      {exp.year}
                    </div>
                  )}

                  {exp?.description && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#444",
                        marginTop: "5px",
                      }}
                    >
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </>
          )
                
              )}
           

          </>
        ) : null}
         
          {/* EDUCATION */}
          {education.length > 0 && (
            <>
              <div className="resume3-section-title">Education</div>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: "15px" }}>
                  <div style={{ fontWeight: "800", fontSize: "13px" }}>
                    {edu?.institute} {edu?.year && `, ${edu.year}`}
                  </div>
                  {edu?.degree && (
                    <div style={{ fontSize: "12px" }}>{edu.degree}</div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate3;
