import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const options = [
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];
const Header = ({ setSideBarIsOpen, name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid className="header_container">
        <Row>
          <Col md={2}>
            <GiHamburgerMenu
              type="button"
              size="2em"
              name="Enable both scrolling & backdrop"
              className="me-5"
              onClick={handleShow}
            />
            <Link to="/">
              <Image
                src="assets/images/DJ-logo-black.png"
                alt="Denver Judo"
                className="ms-5 img-fluid align-items-top header_img"
              />
            </Link>
            <Offcanvas
              className="offcanvas-nav"
              placement={"start"}
              show={show}
              onHide={handleClose}
              name="Enable both scrolling & backdrop"
              {...props}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Link to="/" onClick={handleClose}>
                    <Image
                      src="assets/images/DJ-logo-white.png"
                      alt="Denver Judo"
                      className="ms-5 img-fluid align-items-top header_img"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column text-white w-100 p-2">
                  <Link
                    to="/"
                    onClick={handleClose}
                    className={
                      location === "/" ? "nav-text nav-text-bold" : "nav-text"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/schedule"
                    onClick={handleClose}
                    className={
                      location === "/" ? "nav-text nav-text-bold" : "nav-text"
                    }
                  >
                    Schedule
                  </Link>
                  <Link
                    to="/about"
                    onClick={handleClose}
                    className={
                      location === "/" ? "nav-text nav-text-bold" : "nav-text"
                    }
                  >
                    About
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="header_text">DENVER JUDO</div>
          </Col>
          <Col
            md={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link
              to="https://www.instagram.com/denver.judo.dojo/"
              target="_blank"
            >
              <FaInstagramSquare size={32} className="me-1" />
            </Link>
            <Link
              to="https://www.facebook.com/groups/215615535123043"
              target="_blank"
            >
              <FaFacebookSquare size={32} className="ms-1" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
