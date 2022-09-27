import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const About = () => {
  return (
    <Container>
      <h1 className='text-center mt-3'>
        JUDO IS A MARTIAL ART, OLYMPIC AND PARALYMPIC SPORT, AND A WAY OF LIFE
      </h1>
      <section className='pt-4'>
        <Row className='justify-content-center'>
          <Col sm={12} md={10}>
            <Row>
              <Col sm={12} md={4}>
                <img
                  src='assets/img/Jigoro_Kano_and_Kyuzo_Mifune_(restoration)1.png'
                  alt='Jigoro Kano and Kyuzo Mifune'
                  style={{ height: '300px' }}
                />
              </Col>

              <Col sm={12} md={6}>
                <span className='sub-title'>The Gentle Way</span>
                <p className='text-b body-small'>
                  Created in 1882 by Jigoro Kano, Judo Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
