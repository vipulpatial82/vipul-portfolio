import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";
import resume from "../assets/vipulcv.pdf"; // Corrected path

export const Hero = () => {

    const scrollToProjects = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="section hero-section">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <span className="hero-greeting">Hi, I'm</span>
                    <h1 className="hero-name">Vipul Patial</h1>
                    <h2 className="hero-title">Full Stack Engineer</h2>
                    <p className="hero-tagline">
                        Building scalable, user-centric web applications from frontend to backend.
                    </p>

                    <div className="hero-buttons">
                        <button onClick={scrollToProjects} className="btn btn-primary">
                            View Projects <ArrowRight size={18} className="btn-icon" />
                        </button>
                        <a href={resume} download="Vipul_Patial_Resume.pdf" className="btn btn-outline">
                            Download Resume <Download size={18} className="btn-icon" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <pre>
                            <code>
                                <span className="keyword">const</span> <span className="variable">developer</span> = &#123;
                                <span className="property">name</span>: <span className="string">"Vipul Patial"</span>,
                                <span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,
                                <span className="property">skills</span>: [
                                <span className="string">"React"</span>, <span className="string">"Node.js"</span>,
                                <span className="string">"MongoDB"</span>, <span className="string">"Express"</span>
                                ],
                                <span className="property">hardWorker</span>: <span className="boolean">true</span>
                                &#125;;
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
