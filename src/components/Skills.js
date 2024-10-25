import React, { Component } from "react";
import customStyle from '../css/customStyle.module.css';
import { Carousel } from 'react-bootstrap';



class Skills extends Component{
    render() {
        return (
            <div className={customStyle.skillLogoContainer}>
            <Carousel>
                <Carousel.Item> 
                <img className={customStyle.skillLogo}  src="/adobe.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/figma.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/kitll.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/pxlr.png" alt="First Logo" />
                </Carousel.Item>
                <Carousel.Item>
                <img className={customStyle.skillLogo}  src="/canva.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/html.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/css.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/php.png" alt="First Logo" />
                </Carousel.Item>
                <Carousel.Item>
                <img className={customStyle.skillLogo}  src="/mysql.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/freact.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/git.png" alt="First Logo" />
                <img className={customStyle.skillLogo}  src="/boot.png" alt="First Logo" />
                </Carousel.Item>
                </Carousel>
                </div>
           ) }
        }
      
      
      export default Skills