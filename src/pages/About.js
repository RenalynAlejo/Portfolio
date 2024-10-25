import React from "react";
import Personal from "../components/Personal";
import Skills from "../components/Skills";
import customStyle from "../css/customStyle.module.css";



const About = (props) =>{
    return(
        <div className={customStyle.backGround}>
            <h1 className={customStyle.protext15}>Hi! You can call me {props.myname}</h1>
            <Personal/>
            <h1 className={customStyle.protext12}>{props.skil}</h1>
            <Skills/>
            
        </div>
    );
}

export default About
