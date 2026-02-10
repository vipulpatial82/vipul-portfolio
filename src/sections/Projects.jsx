import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
    {
        title: "Owen Express – Online Food Shop",
        description: "A full-stack food ordering platform featuring a reusable component architecture, responsive UI, and real-time updates for menus and orders.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Axios"],
        links: {
            github: "https://github.com/vipulpatial82", // Placeholder if specific repo not known
            demo: "https://food-webiste-6zwl.vercel.app/"
        }
    },
    {
        title: "AI Health Monitor",
        description: "Web-based health assistant for symptom analysis using CSV-based keyword matching and PDF report generation.",
        tags: ["HTML", "CSS", "JavaScript", "jsPDF"],
        links: {
            github: "https://github.com/vipulpatial82",
            demo: "https://ai-health-monitor-rtl7.vercel.app/"
        }
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-card"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <Github size={20} /> Code
                                        </a>
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <ExternalLink size={20} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
