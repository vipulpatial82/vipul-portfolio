import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import "./Experience.css";

export const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Experience & Education</h2>

                    <div className="timeline">
                        {/* Education */}
                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <GraduationCap size={24} />
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">2021 - 2025</span>
                                <h3 className="timeline-title">B.Tech in Computer Science and Engineering</h3>
                                <h4 className="timeline-subtitle">Lovely Professional University</h4>
                                <p className="timeline-text">
                                    Focused on full-stack development, algorithms, and cloud computing.
                                </p>
                            </div>
                        </div>

                        {/* Certification 1 */}
                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <Award size={24} />
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">Certified</span>
                                <h3 className="timeline-title">Full Stack Development (React & Node)</h3>
                                <p className="timeline-text">
                                    Comprehensive training in modern web development technologies including React, Node.js, Express, and MongoDB.
                                </p>
                            </div>
                        </div>

                        {/* Certification 2 */}
                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <Award size={24} />
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">Certified</span>
                                <h3 className="timeline-title">NPTEL Cloud Computing</h3>
                                <h4 className="timeline-subtitle">IIT Kharagpur</h4>
                                <p className="timeline-text">
                                    Gained in-depth knowledge of cloud infrastructure, virtualization, and distributed systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
