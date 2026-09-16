import React from 'react';
import GatewayFlow from "../components/Background/GatewayFlow/GatewayFlow";
import Navbar from '../components/Navbar/Nabar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <div className="home">
            <GatewayFlow />
            <div className="content">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default Home;

