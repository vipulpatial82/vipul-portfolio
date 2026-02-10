import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import "./Contact.css";

export const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="contact-wrapper"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>

                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:vipulpatial82@gmail.com">vipulpatial82@gmail.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:+918278784497">+91-8278784497</a>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/vipulpatial82" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/vipulpatial18/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
