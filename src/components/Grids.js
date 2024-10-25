import React, { Component } from "react";
import customStyle from "../css/customStyle.module.css";
import {  Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";


class Grids extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <section className={customStyle.container1}>
        <div className={customStyle.videoBackgroundContainer}>
          <video autoPlay muted loop className={customStyle.videoBackground}>
            <source src="/bg24.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={customStyle.gridContainer}>
        
            {/* Disply Component */}
          <div className={customStyle.grid1}>
            <img
              className={customStyle.gridInside}
              src="/portmame.png"
              alt="First slide"
            />

            <h1
              className={customStyle.protext}
              onClick={this.handleShow}
              style={{ cursor: "pointer" }}
            >
            Personal Portfolio
            </h1>
            <a className={customStyle.protextModal12}>
                  Ma. Mae Bautista
                </a>
            <h3 className={customStyle.protext}></h3>
          </div>

            {/* Modal Component */}
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>
                <a className={customStyle.protextModal}>
                  Personal Portfolio 
                </a>
                <br></br>
                <a
                  className={customStyle.protextModal11}
                  href="https://renalynalejo.github.io/MaMaeBautista/"
                >
                  Visit Project
                </a>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/portmame.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/resume.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/portfolio.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/contact.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className={customStyle.text2}>
                This project features a sleek personal portfolio designed for my
                friend, showcasing her skills and experiences. Utilizing a
                vibrant yellow, white, and black color palette, it includes
                dedicated sections for her resume, portfolio, and contact
                information. The site is crafted with HTML, CSS, and JavaScript,
                ensuring a modern and responsive design.
              </p>
            </Modal.Body>
          </Modal>
        <Grid1/>
        <Grid2/>
            
          </div>
      </section>
    );
  }
}

export default Grids
