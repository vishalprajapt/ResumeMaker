import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { resume1Data } from '@/Helper/Helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const Resume6Template = () => {
    const { name, role, contact, about, education, experience, skills, references, language } = resume1Data;

    return (
        <div className="resume6-container">
            {/* Header Section */}
            <header className="resume6-header">
                <div className="resume6-header-bg"></div>
                <div className="resume6-profile-wrapper">
                    <Image
                        src="/img/userImg.jpg"
                        alt="Profile"
                        width={160}
                        height={160}
                        style={{ objectFit: 'fill' }}
                    />
                </div>
                <div className="resume6-title-content">
                    <h1 className="resume6-name">{name}</h1>
                    <p className="resume6-job-title-header">{role}</p>
                </div>
            </header>

            {/* Main Body */}
            <Container fluid className="p-0">
                <Row className="m-0">
                    {/* Sidebar */}
                    <Col xs={4} className="resume6-sidebar-col">
                        <section className="mb-5">
                            <div className="resume6-contact-row">
                                <FaPhoneAlt className="resume6-contact-icon" />
                                <span>{contact.phone}</span>
                            </div>
                            <div className="resume6-contact-row">
                                <FaEnvelope className="resume6-contact-icon" />
                                <span>{contact.email}</span>
                            </div>
                            <div className="resume6-contact-row">
                                <FaMapMarkerAlt className="resume6-contact-icon" />
                                <span>{contact.address}</span>
                            </div>
                        </section>

                        <section className="mb-5">
                            <h2 className="resume6-sidebar-header">Education</h2>
                            {education.map((edu, idx) => (
                                <div key={idx} className="mb-3">
                                    <p className="fw-bold mb-0" style={{ fontSize: '11pt' }}>{edu.degree}</p>
                                    <p className="mb-0" style={{ fontSize: '10pt', color: '#475569' }}>{edu.institute}</p>
                                    <p style={{ fontSize: '9pt', color: '#64748b' }}>{edu.year}</p>
                                </div>
                            ))}
                        </section>

                        <section className="mb-5">
                            <h2 className="resume6-sidebar-header">Skills</h2>
                            <ul className="ps-3" style={{ fontSize: '10pt', lineHeight: '2' }}>
                                {skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="resume6-sidebar-header">Language</h2>
                            <ul className="list-unstyled ps-0" style={{ fontSize: '10pt', lineHeight: '2' }}>
                                {language.map((lang, idx) => (
                                    <li key={idx}>{lang}</li>
                                ))}
                            </ul>
                        </section>
                    </Col>

                    {/* Content Area */}
                    <Col xs={8} className="resume6-main-col">
                        <section className="mb-5">
                            <h2 className="resume6-section-title">About Me</h2>
                            <p className="resume6-list-items">{about}</p>
                        </section>

                        <section className="mb-5">
                            <h2 className="resume6-section-title">Work Experience</h2>
                            {experience.map((job, idx) => (
                                <div key={idx} className="mb-4">
                                    <p className="resume6-exp-date">{job.year}</p>
                                    <p className="resume6-company-name">{job.company}</p>
                                    <h3 className="resume6-role-text">{job.role}</h3>
                                    <ul className="ps-3 resume6-list-items">
                                        <li>{job.description}</li>
                                        <li>Initialize and manage relationships with key stakeholders.</li>
                                        <li>Lead outreach through final purchase cycles.</li>
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section>
                            <h2 className="resume6-section-title">References</h2>
                            <Row>
                                {references.map((ref, idx) => (
                                    <Col key={idx} xs={6}>
                                        <p className="resume6-ref-name">{ref.name}</p>
                                        <p className="text-muted mb-2" style={{ fontSize: '9.5pt' }}>{ref.role}</p>
                                        <p className="mb-0" style={{ fontSize: '9pt' }}><strong>Phone:</strong> {ref.phone}</p>
                                        <p style={{ fontSize: '9pt' }}><strong>Email:</strong> {contact.email}</p>
                                    </Col>
                                ))}
                            </Row>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Resume6Template;