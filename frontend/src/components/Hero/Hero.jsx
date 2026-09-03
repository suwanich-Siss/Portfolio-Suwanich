import React from 'react';
import './StyleHero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <span className="hero-badge">Available for Internship</span>
                <h1 className="hero-title">
                    Hi, I'm Suwanich Silaon<br />
                    Software Developer
                </h1>
                <p className="hero-subtitle">
                    นักศึกษาสาขาวิทยาการคอมพิวเตอร์ มีพื้นฐานด้านการพัฒนาเว็บและแอปพลิเคชันบนมือถือ
                    มุ่งมั่นพัฒนาทักษะและนำความรู้ไปประยุกต์ใช้งานจริงผ่านการฝึกงาน
                </p>
                <div className="tech-stack-tags">
                    <span>React Native</span> · <span>Node.js</span> · <span>REST API</span> · <span>MySQL</span> · <span>SQLite</span>
                </div>
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="/Resume_Suwanich_Silaon.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Download Resume
                    </a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;