import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
    { category: "Languages", skills: ["JavaScript", "C++", "Java", "PHP", "C"] },
    { category: "Frontend", skills: ["React", "HTML5", "CSS3", "Redux", "Tailwind (Concepts)"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Databases", skills: ["MongoDB", "MySQL"] },
    { category: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
    { category: "Soft Skills", skills: ["Problem Solving", "Teamwork", "Adaptability"] },
];

export const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Technical Skills</h2>

                    <div className="skills-grid">
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 className="skill-category">{category.category}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
