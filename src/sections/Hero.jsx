import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaBullseye, FaHandshake, FaSyncAlt, FaUserSecret } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import profileImg from "./profile.jpeg";
import "./Hero.css";
import resume from "../assets/vipulcv.pdf";

export const Hero = () => {

    const scrollToProjects = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="section hero-section">
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <motion.span 
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm
                    </motion.span>
                    
                    <h1 className="hero-name">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Vipul Patial
                        </motion.span>
                    </h1>
                    
                    <h2 className="hero-title">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Engineer',
                                2000,
                                'React Developer',
                                2000,
                                'Node.js Developer',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    
                    <motion.p 
                        className="hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Building scalable, user-centric web applications from frontend to backend.
                    </motion.p>

                    <motion.div 
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button onClick={scrollToProjects} className="btn btn-primary btn-animated">
                            View Projects <FaArrowRight className="btn-icon" />
                        </button>
                        <a href={resume} download="Vipul_Patial_Resume.pdf" className="btn btn-outline btn-animated">
                            Download Resume <FaDownload className="btn-icon" />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="profile-container">
                        <div className="profile-ring">
                            <img src={profileImg} alt="Vipul Patial" className="profile-img" />
                        </div>
                        <div className="floating-tags">
                            <span className="ftag ftag-1"><FaBullseye /> Problem Solving</span>
                            <span className="ftag ftag-2"><FaHandshake /> Teamwork</span>
                            <span className="ftag ftag-3"><FaSyncAlt /> Adaptability</span>
                            <span className="ftag ftag-4"><FaUserSecret /> Ambivert</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
