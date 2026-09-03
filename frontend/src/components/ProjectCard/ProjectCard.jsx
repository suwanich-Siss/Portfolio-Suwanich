import React from 'react';
import './StyleProCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
            </div>
            <div className="project-card-tech">
                {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;