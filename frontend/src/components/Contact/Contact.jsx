import React from 'react';
import './StyleContact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <h2 className="contact-headline">Let's Work Together</h2>
            <p className="contact-sub">
                กำลังมองหาโอกาสฝึกงานหรือร่วมงาน — ติดต่อมาได้เลย
            </p>
            <div className="contact-links">
                <a
                    href="mailto:suwnitsilaon@gmail.com"
                    className="contact-btn"
                >
                    Email Me
                </a>
                <a
                    href="https://github.com/suwanich-Siss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                >
                    GitHub
                </a>
            </div>
            <p className="contact-footer">© 2026 Suwanich Silaon</p>
        </footer>
    );
};

export default Contact;