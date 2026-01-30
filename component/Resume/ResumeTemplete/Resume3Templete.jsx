import React from "react";
import Image from "next/image";
import { resume1Data } from "@/Helper/Helper";
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


function ResumeTemplate3() {
  const { name, role, contact, about, education, experience, skills ,language} = resume1Data;

  return (
    <div className="resume3-wrapper">
      {/* HEADER SECTION */}
      <div className="resume3-header">
        <div className="resume3-header-box">
          <div className="resume3-profile-img">
            <Image 
              src="/img/userImg.jpg" 
              alt="profile" 
              width={130} 
              height={130} 
              style={{ objectFit: 'fill' }}
            />
          </div>
          <div className="resume3-name-area">
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p style={{ fontSize: '13px', opacity: 0.9 }}>
              5+ years of experience across domains in the field of {role}
            </p>
          </div>
        </div>
      </div>

      <div className="resume3-body">
        {/* LEFT SIDEBAR */}
        <div className="resume3-sidebar">
          <div className="resume3-contact-item"><FaPhone style={{fontSize:"18px"}}/> {contact?.phone}</div>
          <div className="resume3-contact-item"><MdOutlineMail style={{fontSize:"18px"}}/> {contact?.email}</div>
          {/* <div className="resume3-contact-item">🌐 www.reallygreatsite.com</div> */}
          <div className="resume3-contact-item"><IoLocation style={{fontSize:"18px"}}/> {contact?.address}</div>

          <h3>SKILLS</h3>
          <ul style={{ paddingLeft: '15px', fontSize: '12px', lineHeight: '1.8' }}>
            {skills?.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <h3>LANGUAGES</h3>
          <ul style={{ paddingLeft: '15px', fontSize: '12px', lineHeight: '1.8' }}>
            {language[0]}
           {language.map((item)=>(
            <li>{item}</li>
           ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="resume3-content">
          <div className="resume3-section-title">Professional Experience</div>
          <p style={{ fontSize: '12px', lineHeight: '1.5', color: '#333' }}>{about}</p>

          <div className="resume3-section-title">Work Experience</div>
          {experience?.map((exp, i) => (
            <div key={i} className="resume3-exp-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '13px' }}>
                <span>{exp.company}</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{exp.year}</div>
              <p style={{ fontSize: '12px', color: '#444', marginTop: '5px' }}>{exp.description}</p>
            </div>
          ))}

          <div className="resume3-section-title">Education</div>
          {education?.map((edu, i) => (
            <div key={i} style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: '800', fontSize: '13px' }}>{edu.institute}, {edu.year}</div>
              <div style={{ fontSize: '12px' }}>{edu.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate3;