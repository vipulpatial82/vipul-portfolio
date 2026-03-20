import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { useState } from "react";
import "./Projects.css";

const projects = [
    {
        title: "Owen Express – Online Food Shop",
        description: "A full-stack food ordering platform featuring a reusable component architecture, responsive UI, and real-time updates for menus and orders.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Axios"],
        links: {
            github: "https://github.com/vipulpatial82",
            demo: "https://food-webiste-6zwl.vercel.app/"
        },
        featured: true
    },
    {
        title: "AI Health Monitor",
        description: "Web-based health assistant for symptom analysis using CSV-based keyword matching and PDF report generation.",
        tags: ["HTML", "CSS", "JavaScript", "jsPDF"],
        links: {
            github: "https://github.com/vipulpatial82",
            demo: "https://ai-health-monitor-rtl7.vercel.app/"
        },
        featured: false
    }
];

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                        <h2 className="section-title">
                        <MdTrendingUp className="title-icon" /> Projects
                    </h2>

                    <motion.div 
                        className="projects-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-card"
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <div className="project-content">
                                    <motion.h3 
                                        className="project-title"
                                        animate={{
                                            color: hoveredIndex === index ? '#3b82f6' : 'var(--text-primary)'
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <motion.span 
                                                key={idx} 
                                                className="project-tag"
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    backgroundColor: 'rgba(59, 130, 246, 0.2)'
                                                }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <motion.a 
                                            href={project.links.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-link"
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub size={20} /> Code
                                        </motion.a>
                                        <motion.a 
                                            href={project.links.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-link demo-link"
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt size={18} /> Live Demo
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
