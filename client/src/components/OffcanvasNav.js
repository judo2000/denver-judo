import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffcanvasNav = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className='navbar navbar-dark navbar-custom'
        >
          <Container fluid>
            <Navbar.Brand color='white' to='/'>
              <img
                src='assets/img/den_judo_logo_white.png'
                className=''
                alt='Denver Judo'
                style={{ width: '50px' }}
              />
              Denver Judo
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              color='white'
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton className='offcanvas'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Denver Judo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <LinkContainer to='/' onClick={() => (this.expand = '')}>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer
                    to='/schedule'
                    onClick={() => (this.expand = '')}
                  >
                    <Nav.Link>Schedule</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about' onClick={() => (this.expand = '')}>
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default OffcanvasNav;
