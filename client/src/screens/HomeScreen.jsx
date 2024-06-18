import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import video from "../assets/video/Denver-Judo-Splash-1080.mp4";
import { useGetHomeContentQuery } from "../slices/contentApiSlice";
import Loader from "../components/Loader.jsx";
import { useGetFAQsQuery } from "../slices/faqApiSlice.js";
import Faq from "../components/Faq.jsx";

const HomeScreen = () => {
  const { data: homeContent, isLoading, refetch } = useGetHomeContentQuery();
  const ourDojo = homeContent?.content[0];
  const kano = homeContent?.content[1];

  return (
    <>
      <section id="video" className="text-center">
        <div className="videoWrapper">
          <iframe src={video} allowFullScreen></iframe>
        </div>
      </section>

      <section id="home-heading" className="my-1">
        <div className="text-center">
          <h1 className="cap-heading my-1 pt-2">
            Train for competition or self defence at Denver Judo
          </h1>
        </div>
      </section>

      <section className="classes my-4 p-4">
        <Row>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/images/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Judo Fundamentals</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda eius hic fugit provident officia suscipit.{" "}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/images/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Competition Judo</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
                amet. Voluptatum cupiditate magnam enim sunt!{" "}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/images/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Kids Judo</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                cumque incidunt temporibus excepturi perspiciatis magni!{" "}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
        </Row>
      </section>

      <section id="try-a-class" className="px-4 mt-4 try-a-class">
        <h2 className="ms-4 free-class-heading pt-4">TRY A FREE CLASS</h2>
        <div className="text-center py-4">
          <div id="freetrial_583f3707-bf52-41ea-8215-8213abeb0f83"></div>
        </div>
      </section>

      <section id="about-judo" className="home-about">
        <div className="pt-4">
          <Row className="mt-4 py-5 justify-content-center">
            <Col md={10}>
              <Row>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <Image
                      className="home-about-img img-fluid"
                      src="assets/images/kano.png"
                      alt="Kano"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className="section-heading text-white">
                          {kano.contentHead}
                        </h2>
                        <span className="section-text text-white">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: kano.contentText,
                            }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </Col>
              </Row>

              <Row className="py-5 ">
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className="section-heading text-white">
                          {ourDojo.contentHead}
                        </h2>
                        <span className="section-text text-white">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: ourDojo.contentText,
                            }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <Image
                      className="home-about-img img-fluid"
                      src="assets/images/Den_Judo_Kayla_Harrison.jpg"
                      alt="Kano"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          )
        </div>
      </section>

      <section id="faq" className="mx-4 px-4 py-4">
        <div>
          <h2 className="home-sub-heading py-4">Frequently Asked Questions</h2>
        </div>
        <Faq />
      </section>

      <section id="map" className="mx-4 px-4">
        <h2>Our Location</h2>
        We are located at 719 Mariposa St, Denver, CO 80204
      </section>
    </>
  );
};

export default HomeScreen;
