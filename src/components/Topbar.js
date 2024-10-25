import React from "react";
import customStyle from '../css/customStyle.module.css';

function Topbar() {

    // Function to handle smooth scrolling
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div>
            <nav>
                <img src="/whitelogo.png" style={{height:"80px",margin:"auto",float:"left", paddingLeft:"20px", paddingTop:"6px"}} alt="Logo"/>
                <div>
                    <ul>
                        <li><a href="#contact" onClick={() => scrollToSection('contact')} className={customStyle.protest}>Contact</a></li>
                        <li><a href="#about" onClick={() => scrollToSection('about')} className={customStyle.protest}>About</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection('projects')} className={customStyle.protest}>Projects</a></li>
                        <li><a href="#home" onClick={() => scrollToSection('home')} className={customStyle.protest}>Home</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;
