import { motion } from "framer-motion";
import { FaCode, FaBolt } from "react-icons/fa";
import { useState } from "react";
import "./Skills.css";

const skillsData = [
    { category: "Languages", skills: ["JavaScript", "C++", "Java",  "C"], icon: FaCode },
    { category: "Frontend", skills: ["React", "HTML5", "CSS3", "Redux", "Tailwind (Concepts)"], icon: FaBolt },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs","Laravel","PHP"], icon: FaCode },
    { category: "Databases", skills: ["MongoDB", "MySQL","DBMS"], icon: FaBolt },
    { category: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code","Docker","AWS"], icon: FaCode },
    { category: "Soft Skills", skills: ["Problem Solving", "Teamwork", "Adaptability"," Time Management","Ambivert"], icon: FaBolt },
];

export const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        <FaBolt className="title-icon" /> Technical Skills
                    </h2>

                    <motion.div 
                        className="skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skillsData.map((category, index) => {
                            const IconComponent = category.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="skill-card"
                                    variants={cardVariants}
                                    whileHover={{ 
                                        y: -8,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-icon">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="skill-category">{category.category}</h3>
                                    </div>
                                    <div className="skill-tags">
                                        {category.skills.map((skill, idx) => (
                                            <motion.span 
                                                key={idx} 
                                                className={`skill-tag ${selectedSkill === `${index}-${idx}` ? 'selected' : ''}`}
                                                whileHover={{ 
                                                    scale: 1.15,
                                                    y: -3
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedSkill(`${index}-${idx}`)}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
