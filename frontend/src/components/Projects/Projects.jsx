import React from "react";
import { featuredProject, otherProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./StylePro.css";

const Projects = () => {
    const archNodes = featuredProject.architecture.split(' -> ');

    return (
        <section id="projects">
            <h2 className="section-title">Featured Project</h2>

            <div className="featured-project-card">
                <p className="featured-badge">Featured</p>
                <h3 className="featured-title">{featuredProject.title}</h3>
                <p className="featured-desc">{featuredProject.description}</p>

                <div className="tech-stack-row">
                    {featuredProject.techStack.map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                    ))}
                </div>

                <div className="architecture-box">
                    <p className="arch-label">Architecture</p>
                    <div className="arch-flow">
                        {archNodes.map((node, i) => (
                            <React.Fragment key={i}>
                                <span className="arch-node">{node}</span>
                                {i < archNodes.length - 1 && <span className="arch-arrow">→</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="featured-grid">
                    <div>
                        <h4 className="sub-title">Key Features</h4>
                        <ul className="feature-list">
                            {featuredProject.features.map((f, i) => (
                                <li key={i}><span className="check">✓</span> {f}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="challenge-card">
                        <p className="challenge-title"> Challenge & Solution</p>
                        <p className="challenge-detail">
                            <strong>Problem: </strong>{featuredProject.challenges.problem}
                        </p>
                        <p className="challenge-detail" style={{ marginTop: '12px' }}>
                            <strong>Solution: </strong>{featuredProject.challenges.solution}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="section-title">Other Projects</h2>
            <div className="other-projects-grid">
                {otherProjects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
