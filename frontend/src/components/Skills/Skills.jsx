import React from 'react';
import { skills } from '../../data/skills';
import './StyleSkill.css';

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                        <h3 className="skill-category-title">{category}</h3>
                        <div className="skill-list">
                            {skillList.map((skill) => (
                                <span key={skill} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;