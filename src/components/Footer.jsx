import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow-line"></div>
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">Vipul.dev</h2>
                    <p className="footer-tagline">Building digital experiences that matter.</p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/vipulpatial82" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/vipulpatial18/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:vipulpatial82@gmail.com" aria-label="Email">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="footer-copyright">
                    <p> @Vipul Patial.</p>
                </div>
            </div>
        </footer>
    );
};
