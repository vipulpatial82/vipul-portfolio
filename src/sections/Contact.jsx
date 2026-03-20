import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "a48a6b4c-00a4-45b1-9eb8-2ef31ba84072");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("subject", `New Portfolio Message from ${formData.name}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 5000);
            }
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("error");
            setTimeout(() => setStatus(""), 5000);
        }
    };

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
                                <MdEmail className="info-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:vipulpatial82@gmail.com">vipulpatial82@gmail.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <MdPhone className="info-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:+918278784497">+91-8278784497</a>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/vipulpatial82" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/vipulpatial18/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    rows="5" 
                                    name="message"
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message"} <MdSend size={18} />
                            </button>
                            {status === "success" && <p className="status-message success">✓ Message sent successfully! I'll get back to you soon.</p>}
                            {status === "error" && <p className="status-message error">✗ Failed to send message. Please try again or email directly.</p>}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
