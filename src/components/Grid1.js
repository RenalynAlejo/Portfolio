import React, { Component } from "react";
import customStyle from "../css/customStyle.module.css";
import { CardTitle, Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";


class Grid1 extends Component {
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
      
        <div className={customStyle.gridContainer1}>
        
            {/* Disply Component */}
          <div className={customStyle.grid1}>
            <img
              className={customStyle.gridInside}
              src="/home.png"
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
                  Monica Lazaro
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
                  href="https://renalynalejo.github.io/Monica-Lazaro/"
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
                    src="/home.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/skills.png"
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
                    src="/about.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/about.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className={customStyle.text2}>
              This project is a clean, modern portfolio built for my friend to highlight her skills and experiences. 
              The design features a striking blue, white, and black color scheme and includes sections for her bio, skills, gallery, and contact details. 
              Developed with HTML, CSS, and JavaScript, the site is fully responsive and user-friendly.
              </p>
            </Modal.Body>
          </Modal>
          </div>
   
    )
}
}
export default Grid1
