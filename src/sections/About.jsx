import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="about-wrapper"
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-grid">
                        <div className="about-text-container">
                            <div className="about-text">
                                <p>
                                    I am a passionate <strong>Full Stack Engineer</strong> with a strong foundation in building scalable,
                                    user-centric web applications. With expertise in the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>,
                                    I enjoy solving complex problems and turning ideas into reality through clean and efficient code.
                                </p>
                                <p>
                                    My journey in software development started with a curiosity for how things work on the web,
                                    which led me to pursue a B.Tech in Computer Science. I am constantly learning new technologies
                                    and best practices to stay ahead in the fast-paced tech world.
                                </p>
                                <p>
                                    When I'm not coding, I enjoy exploring new tools, contributing to open-source projects,
                                    and staying updated with the latest industry trends.
                                </p>
                            </div>
                        </div>

                        <div className="about-stats">
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Years of Code</span>
                            </motion.div>
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects Built</span>
                            </motion.div>
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Commitment</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
