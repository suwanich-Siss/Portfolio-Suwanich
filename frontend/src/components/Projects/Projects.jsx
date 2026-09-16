import React, { useEffect, useRef } from "react";
import { featuredProject, otherProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./StylePro.css";

const AUTO_PLAY_INTERVAL = 3000;

const Projects = () => {
    const arcNode = featuredProject.architecture.split("->").map((node) => node.trim());
    const [current, setCurrent] = React.useState(0);
    const timerRef = useRef(null);

    const images = Array.isArray(featuredProject.images)
        ? featuredProject.images
        : Array.isArray(featuredProject.image)
        ? featuredProject.image
        : [featuredProject.image];

    const totalImages = images.length;

    const goPrev = () => setCurrent((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    const goNext = () => setCurrent((prev) => (prev === totalImages - 1 ? 0 : prev + 1));

    // Auto-play
    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
        }, AUTO_PLAY_INTERVAL);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [totalImages]);

    const handlePrev = () => { goPrev(); resetTimer(); };
    const handleNext = () => { goNext(); resetTimer(); };
    const handleDot  = (i) => { setCurrent(i); resetTimer(); };

    return (
        <section id="projects">
            <h2 className="section-title">Featured Project</h2>

            <div className="featured-project-card">
                <div className="featured-layout">

                    {/* ── LEFT ── */}
                    <div className="featured-left">
                        <p className="featured-badge">Featured</p>
                        <h3 className="featured-title">{featuredProject.title}</h3>
                        <p className="featured-desc">{featuredProject.description}</p>

                        <div className="tech-stack-row">
                            {featuredProject.techStack.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        {/* Architecture */}
                        <div className="architecture-box">
                            <p className="arch-label">Architecture</p>
                            <div className="architecture-diagram">
                                {arcNode.map((node, index) => (
                                    <React.Fragment key={index}>
                                        <span className="arch-node">{node}</span>
                                        {index < arcNode.length - 1 && (
                                            <span className="arch-arrow"> → </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Key Features + Challenge side by side */}
                        <div className="featured-grid">
                            <div>
                                <h4 className="sub-title">Key Features</h4>
                                <ul className="feature-list">
                                    {featuredProject.features.map((f, i) => (
                                        <li key={i}>
                                            <span className="check">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="challenge-card">
                                <p className="challenge-title">Challenge &amp; Solution</p>
                                <p className="challenge-detail">
                                    <strong>Problem</strong>
                                    {featuredProject.challenges.problem}
                                </p>
                                <p className="challenge-detail">
                                    <strong>Solution</strong>
                                    {featuredProject.challenges.solution}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT — Carousel only ── */}
                    <div className="featured-right">
                        <div className="carousel-frame">
                            {totalImages > 0 && (
                                <img
                                    src={images[current]}
                                    alt={`${featuredProject.title} screenshot ${current + 1}`}
                                    className="carousel-image"
                                />
                            )}

                            {totalImages > 1 && (
                                <>
                                    <button
                                        type="button"
                                        className="carousel-btn carousel-btn-prev"
                                        onClick={handlePrev}
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        type="button"
                                        className="carousel-btn carousel-btn-next"
                                        onClick={handleNext}
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>

                        {totalImages > 1 && (
                            <span className="carousel-counter">{current + 1} / {totalImages}</span>
                        )}

                        {totalImages > 1 && (
                            <div className="carousel-dots">
                                {images.map((_, i) => (
                                    <button
                                        type="button"
                                        key={i}
                                        className={`carousel-dot ${i === current ? "active" : ""}`}
                                        onClick={() => handleDot(i)}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
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
