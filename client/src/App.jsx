import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

function App() {
  const location = window.location.pathname;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? "site-container active-cont d-flex flex-column"
            : "site-container d-flex flex-column"
        }
      >
        <ToastContainer position="top-center" limit={1} />

        <header>
          <Container fluid className="header_container">
            <Row>
              <Col md={2} className="d-flex justify-content-end">
                test
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                center
              </Col>
              <Col md={2} className="d-flex justify-content-end">
                test
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
