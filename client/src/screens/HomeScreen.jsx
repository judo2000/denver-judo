import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import video from "../assets/video/Denver-Judo-Splash-1080.mp4";
import { useGetHomeContentQuery } from "../slices/contentApiSlice";

const HomeScreen = () => {
  const { data: homeContent, isLoading, refetchMy } = useGetHomeContentQuery();

  console.log(homeContent);

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
    </>
  );
};

export default HomeScreen;
