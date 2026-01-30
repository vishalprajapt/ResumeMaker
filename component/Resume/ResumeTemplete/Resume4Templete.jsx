import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Resume4Template = () => {
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

  return (
    <div className="resume-container">
      {/* HEADER */}
      <header className="resume-header">
        <div className="name-title">
          {name && <h1>{name}</h1>}
          {role && <p className="text-xl text-gray-600 font-medium">{role}</p>}
        </div>

        <div className="w-32 h-32 bg-gray-200 grayscale overflow-hidden">
          <Image
            src={passportImage || "/img/userImg.jpg"}
            alt="profile"
            width={130}
            height={130}
            style={{ objectFit: "fill" }}
          />
        </div>
      </header>

      {/* CONTACT STRIP */}
      <div className="contact-strip">
        {contact.phone && (
          <div className="flex items-center gap-1">
            <FaPhone size={11} /> {contact.phone}
          </div>
        )}

        {contact.address && (
          <div className="flex items-center gap-1">
            <IoLocation size={11} /> {contact.address}
          </div>
        )}

        {contact.email && (
          <div className="flex items-center gap-1">
            <MdOutlineMail size={11} /> {contact.email}
          </div>
        )}
      </div>

      <div className="main-layout">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {about && (
            <section className="mb-10">
              <span className="section-title">About Me</span>
              <div className="section-divider"></div>
              <p className="text-[10pt] leading-relaxed text-gray-700">
                {about}
              </p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <span className="section-title">Work Experience</span>
              <div className="section-divider"></div>

              {experience.map((job, idx) => (
                <div key={idx} className="mb-6">
                  <div className="exp-header">
                    <span>{job?.company}</span>
                    <span>{job?.year}</span>
                  </div>

                  {job?.role && (
                    <div className="role-line-box">
                      <span className="text-[10pt] font-semibold text-gray-600 italic">
                        {job.role}
                      </span>
                      <div className="role-line"></div>
                    </div>
                  )}

                  {job?.description && (
                    <ul className="list-style text-gray-700">
                      <li>{job.description}</li>
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {education.length > 0 && (
            <section className="mb-10">
              <span className="section-title">Education</span>

              {education.map((edu, i) => (
                <div key={i} className="mb-4 text-[10pt]">
                  <h4 className="font-bold uppercase leading-tight">
                    {edu?.institute}
                  </h4>
                  {edu?.degree && <p className="italic">{edu.degree}</p>}
                  {edu?.year && <p className="text-gray-500">{edu.year}</p>}
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section className="mb-10">
              <span className="section-title">Skills</span>
              <ul className="list-style mt-2 font-medium">
                {skills.map((skill, i) => (
                  <li key={i} className="mb-1">{skill}</li>
                ))}
              </ul>
            </section>
          )}

          {language.length > 0 && (
            <section className="mb-10">
              <span className="section-title">Languages</span>
              <ul className="list-style mt-2">
                {language.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {references.length > 0 && (
            <section>
              <span className="section-title">Reference</span>

              {references.slice(0, 1).map((ref, i) => (
                <div key={i} className="mt-2 text-[10pt]">
                  <h4 className="font-bold">{ref?.name}</h4>
                  {ref?.role && <p className="text-gray-600">{ref.role}</p>}
                  {ref?.phone && (
                    <p className="flex items-center gap-2 font-bold mt-1">
                      <FaPhone size={10} /> {ref.phone}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume4Template;
