import { motion } from "framer-motion";
import { FaGraduationCap, FaMedal, FaEye } from "react-icons/fa";
import cert1 from "../assets/cloud computing nptel.pdf";
import cert2 from "../assets/SkillDevelopmentCertificateVipul.pdf";
import cert3 from "../assets/dsa.pdf";
import "./Experience.css";

export const Experience = () => {
    return (
        <>
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaGraduationCap size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2021 - 2025</span>
                                <h3 className="timeline-title">B.Tech in Computer Science and Engineering</h3>
                                <h4 className="timeline-subtitle">Lovely Professional University</h4>
                                <p className="timeline-text">Focused on full-stack development, algorithms, and cloud computing.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaGraduationCap size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Apr 2021 – Mar 2022</span>
                                <h3 className="timeline-title">Intermediate</h3>
                                <h4 className="timeline-subtitle">Him Gurukul International School Bhalat, Hamirpur</h4>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaGraduationCap size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Apr 2019 – Mar 2020</span>
                                <h3 className="timeline-title">Matriculation</h3>
                                <h4 className="timeline-subtitle">Him Gurukul International School Bhalat, Hamirpur</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        <section id="certifications" className="section certifications-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Certifications</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaMedal size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Certified</span>
                                <h3 className="timeline-title">Full Stack Development (React & Node)</h3>
                                <p className="timeline-text">Comprehensive training in modern web development technologies including React, Node.js, Express, and MongoDB.</p>
                                <a href={cert2} target="_blank" rel="noopener noreferrer" className="cert-btn">
                                    <FaEye size={14} /> View Certificate
                                </a>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaMedal size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Certified</span>
                                <h3 className="timeline-title">NPTEL Cloud Computing</h3>
                                <h4 className="timeline-subtitle">IIT Kharagpur</h4>
                                <p className="timeline-text">Gained in-depth knowledge of cloud infrastructure, virtualization, and distributed systems.</p>
                                <a href={cert1} target="_blank" rel="noopener noreferrer" className="cert-btn">
                                    <FaEye size={14} /> View Certificate
                                </a>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaMedal size={22} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Certified</span>
                                <h3 className="timeline-title">Data Structures and Algorithms</h3>
                                <p className="timeline-text">Comprehensive knowledge in data structures, algorithms, and problem-solving techniques.</p>
                                <a href={cert3} target="_blank" rel="noopener noreferrer" className="cert-btn">
                                    <FaEye size={14} /> View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};
