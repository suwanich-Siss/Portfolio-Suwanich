import React from 'react';
import './StyleAbout.css';

const About = () => {
    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
                <p className="about-text">
                    ผมเป็นนักศึกษาสาขา <span className="about-highlight">วิทยาการคอมพิวเตอร์</span> ที่มีความหลงใหลในการพัฒนาซอฟต์แวร์
                    ทั้งในด้าน Mobile และ Web Application โดยมีประสบการณ์ทำโปรเจกต์จริงตั้งแต่ออกแบบ
                    Database จนถึงการ Deploy ระบบให้ใช้งานได้บน Network จริง
                </p>
                <p className="about-text">
                    มีความถนัดด้าน <span className="about-highlight">React Native</span>, <span className="about-highlight">Node.js</span>,
                    และการออกแบบ <span className="about-highlight">REST API</span> พร้อมทั้งมีทักษะในการแก้ปัญหาทางเทคนิคและการทำงานกับ
                    Database ทั้ง SQL
                </p>
                <p className="about-text">
                    กำลังมองหาโอกาสฝึกงานที่จะได้ทำงานร่วมกับทีม เรียนรู้จากพี่ Senior Developer
                    และนำความรู้ที่มีไปสร้างประโยชน์ให้กับองค์กรจริง
                </p>
            </div>
        </section>
    );
};

export default About;