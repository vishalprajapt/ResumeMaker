import React from 'react';
import { resume1Data } from '@/Helper/Helper';
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image';


const Resume4Template = () => {
  const { name, role, contact, about, education, experience, skills, references, language } = resume1Data;

  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="name-title">
          <h1>{name}</h1>
          <p className="text-xl text-gray-600 font-medium">{role}</p>
        </div>
        <div className="w-32 h-32 bg-gray-200 grayscale overflow-hidden">
          <Image src="/img/userImg.jpg" alt="profile" 
          
           width={130} 
              height={130} 
              style={{ objectFit: 'fill' }}
          />
        </div>
      </header>

      <div className="contact-strip">
        <div className="flex items-center gap-1"><FaPhone size={11} /> {contact.phone}</div>
        <div className="flex items-center gap-1"><IoLocation size={11} /> {contact.address}</div>
        <div className="flex items-center gap-1"><FaGlobe size={11} /> reallygreatsite.com</div>
        <div className="flex items-center gap-1"><MdOutlineMail size={11} /> {contact.email}</div>
      </div>

      <div className="main-layout">
        <div className="left-column">
          <section className="mb-10">
            <span className="section-title">About Me</span>
            <div className="section-divider"></div>
            <p className="text-[10pt] leading-relaxed text-gray-700">{about}</p>
          </section>

          <section>
            <span className="section-title">Work Experience</span>
            <div className="section-divider"></div>
            {experience.map((job, idx) => (
              <div key={idx} className="mb-6">
                <div className="exp-header">
                  <span>{job.company}</span>
                  <span>{job.year}</span>
                </div>
                <div className="role-line-box">
                  <span className="text-[10pt] font-semibold text-gray-600 italic">{job.role}</span>
                  <div className="role-line"></div>
                </div>
                <ul className="list-style text-gray-700">
                  <li>{job.description}</li>
                  <li>Accomplished key milestones and managed team objectives efficiently.</li>
                </ul>
              </div>
            ))}
          </section>
        </div>

        <div className="right-column">
          <section className="mb-10">
            <span className="section-title">Education</span>
            {education.map((edu, i) => (
              <div key={i} className="mb-4 text-[10pt]">
                <h4 className="font-bold uppercase leading-tight">{edu.institute}</h4>
                <p className="italic">{edu.degree}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <span className="section-title">Skills</span>
            <ul className="list-style mt-2 font-medium">
              {skills.map((skill, i) => <li key={i} className="mb-1">{skill}</li>)}
            </ul>
          </section>

          <section className="mb-10">
            <span className="section-title">Languages</span>
            <ul className="list-style mt-2">
              {language.map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
          </section>

          <section>
            <span className="section-title">Reference</span>
            {references.slice(0, 1).map((ref, i) => (
              <div key={i} className="mt-2 text-[10pt]">
                <h4 className="font-bold">{ref.name}</h4>
                <p className="text-gray-600">{ref.role}</p>
                <p className="flex items-center gap-2 font-bold mt-1">
                  <FaPhone size={10} /> {ref.phone}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume4Template;