import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <section id="about-judo-heading" className="mt-4">
        <div className="cap-heading text-center">
          <h1>Judo is a martial art, olympic sport, and way of life. </h1>
        </div>
      </section>

      <section id="about" className="about">
        <div className="">
          <Row className="mt-4 py-5 justify-content-center">
            <Col md={10}>
              <Row>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="d-flex justify-content-end ms-4 text-center">
                    <Image
                      className="home-about-img img-fluid"
                      src="assets/images/Jigoro_Kano_and_Kyuzo_Mifune_(restoration)1.png"
                      alt="Kano"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3 section-text">
                  <div className="ms-4">
                    <h2 className="section-heading ">The Gentle Way</h2>
                    <span className="">
                      <p>
                        Created in 1882 by Jigoro Kano, Judo Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="pt-5 ">
                <Col sm={12} md={6} className="ps-2 py-3 section-text">
                  <div className="ms-4">
                    <h2 className="section-heading ">Our Club</h2>
                    <span className="">
                      <p>
                        For more than 20 years, Denver Judo has been the premier
                        training club for competitive and recreational judoka.
                        The number one rule at Denver Judo is respect. We
                        facilitate a community of mutual respect and do not
                        allow any toxicity.
                      </p>
                      <p>
                        Denver Judo hosts two annual tournaments, the Denver
                        Classic and our spring tournament.
                      </p>
                    </span>
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <Image
                      className="d-flex justify-content-start home-about-img img-fluid responsive"
                      src="assets/images/2016-Black-Belts-1024x731.png"
                      alt="Kano"
                      style={{ width: "300px", height: "214px" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
