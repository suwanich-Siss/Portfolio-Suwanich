import React from 'react';
import { experiences } from "../../data/projects";
import './StyleExperience.css';

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, i) => (
                    <div key={i} className="experience-item">
                        <div className="exp-header">
                            <p className="exp-role">{exp.role}</p>
                            <span className="exp-period">{exp.period}</span>
                        </div>
                        <p className="exp-org">{exp.org}</p>
                        <p className="exp-desc">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;