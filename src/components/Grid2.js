import React, { Component } from "react";
import customStyle from "../css/customStyle.module.css";
import { CardTitle, Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";


class Grid2 extends Component {
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
              src="/shoehome.png"
              alt="First slide"
            />

            <h1
              className={customStyle.protext}
              onClick={this.handleShow}
              style={{ cursor: "pointer" }}
            >
            E-commerce Web Frontend Design
            </h1>
            <a className={customStyle.protextModal12}>
                Kathrina Deveraux
                </a>
            <h3 className={customStyle.protext}></h3>
          </div>

            {/* Modal Component */}
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>
                <a className={customStyle.protextModal13}>
                E-commerce Web Frontend Design 
                </a>
                <br></br>
                <a
                  className={customStyle.protextModal11}
                  href="https://renalynalejo.github.io/finalcomms/"
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
                    src="/shoehome.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/shoebout.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/shoeshop.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/shoecart.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={customStyle.gridInsideModal}
                    src="/shoecont.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className={customStyle.text2}>
              This project showcases a stylish frontend design for a shoe shop, developed for my client in 2020. 
              Featuring a vintage theme, the site includes multiple pages: home, about, contact, products, and cart. 
              The color palette consists of brown, white, dark yellow, and black, creating a warm and inviting atmosphere that 
              complements the shop's offerings.
              </p>
            </Modal.Body>
          </Modal>
          </div>
   
    )
}
}
export default Grid2
