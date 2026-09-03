import React from 'react';
import Navbar from '../components/Navbar/Nabar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
            </main>
            <Contact />
        </div>
    );
};

export default Home;

