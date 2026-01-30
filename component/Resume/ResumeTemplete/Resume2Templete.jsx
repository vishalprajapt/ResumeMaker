import React from "react";
import Image from "next/image";
import { resume1Data } from "@/Helper/Helper";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


function ResumeTemplate2() {
  const { name, role, contact, about, education, experience, skills, references ,language } = resume1Data;


  const handlefucntion=()=>{
    
  }

  return (
    <div className="resume2-wrapper">
      {/* LEFT SIDEBAR */}
      <div className="resume2-sidebr">
        <div className="resume2-profile-container">
          <Image 
            src="/img/userImg.jpg" 
            alt="profile" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>

        <h3>EDUCATION</h3>
        {education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '13px' }}>{edu.institute}</div>
            <div style={{ fontSize: '12px' }}>{edu.degree}</div>
            <div style={{ fontSize: '11px', opacity: 0.8 }}>{edu.year}</div>
          </div>
        ))}

        <h3>SKILL</h3>
        <ul style={{ paddingLeft: '15px', fontSize: '13px' }}>
          {skills.map((skill, i) => <li key={i} style={{ marginBottom: '5px' }}>{skill}</li>)}
        </ul>

         <h3>language</h3>
        {language.map((ref, i) => (
          <div key={i} style={{ marginBottom: '15px', fontSize: '12px' }}>
            <div style={{ fontWeight: 'bold' }}>{ref.name}</div>
            <div>{ref}</div>
        
          </div>
        ))}

        {/* <h3>REFERENCE</h3>
        {references.map((ref, i) => (
          <div key={i} style={{ marginBottom: '15px', fontSize: '12px' }}>
            <div style={{ fontWeight: 'bold' }}>{ref.name}</div>
            <div>{ref.role}</div>
            <div>{ref.phone}</div>
          </div>
        ))} */}
      </div>  

      {/* RIGHT CONTENT */}
      <div className="resume2-content">
        <h1>{name}</h1>
        <h1>{role}</h1>

        <div className="resume2-contact-box">
          <div><FaPhone/> {contact.phone}</div>
          <div><IoLocation/> {contact.address}</div>
          <div><MdOutlineMail/> {contact.email}</div>
        </div>

        <h3 className="resume2-body-title">ABOUT ME</h3>
        <p style={{ fontSize: '12px', lineHeight: '1.6' }}>{about}</p>

        <h3 className="resume2-body-title">WORK EXPERIENCE</h3>
        {/* {experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
              <span>{exp.company}</span>
              <span>{exp.year}</span>
            </div>
            <div style={{ fontStyle: 'italic', fontSize: '13px', margin: '2px 0' }}>{exp.role}</div>
            <p style={{ fontSize: '12px' }}>{exp.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default ResumeTemplate2;