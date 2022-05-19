import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import "./about.styles.scss";

// Import Background Image
import Img1 from "../../assets/images/about/img-1.png";
import Img2 from "../../assets/images/about/img-2.png";

// Import Icons
import FeatherIcon from "feather-icons-react";

function About() {
  return (
    <>
      <section className="section" id="about">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2>About Us</h2>
                <p className="text-muted">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis suscipit laboriosam nisi commodi consequatur.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="font-weight-normal  mb-4">
                Productive & Customizable For{" "}
                <span className="font-weight-medium">Developers</span>
              </h2>
              <p className="text-muted mb-4">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil atque corrupti molestiae.
              </p>
              <p className="f-17 text-muted">
                <FeatherIcon
                  className="icon-xs text-primary icon-fill-primary icon mr-2"
                  icon="grid"
                />{" "}
                Marketing program activities
              </p>
              <p className="f-17 text-muted">
                <FeatherIcon
                  className="icon-xs text-primary icon-fill-primary icon mr-2"
                  icon="layout"
                />{" "}
                Customization product
              </p>
              <p className="f-17 text-muted mb-4">
                <FeatherIcon
                  className="icon-xs text-primary icon-fill-primary icon mr-2"
                  icon="monitor"
                />{" "}
                At vero eos accusamus iusto
              </p>
              <a href="#" className="f-18">
                More Information{" "}
                <span className="ml-2 right-icon f-24">&#8594;</span>
              </a>
            </Col>

            <Col lg={4}>
              <div className="card border-0">
                <div className="bg-soft-primary about-img rounded">
                  <img src={Img1} alt="" className="img-fluid mx-auto" />
                </div>
                <div className="mt-3">
                  <p className="text-uppercase text-muted mb-2 f-13">
                    Development
                  </p>
                  <h4 className="f-18">Product Development</h4>
                  <p className="text-muted">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntur magni.
                  </p>
                  <Link to="#" className="read-more">
                    Read More <span className="ml-2 right-icon">&#8594;</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card border-0">
                <div className="bg-soft-info about-img rounded">
                  <img src={Img2} alt="" className="img-fluid mx-auto" />
                </div>
                <div className="mt-3">
                  <p className="text-uppercase text-muted mb-2 f-13">
                    Marketing
                  </p>
                  <h4 className="f-18">Marketing Product</h4>
                  <p className="text-muted">
                    Temporibus autem quibusdam a officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                  </p>
                  <Link to="#" className="read-more">
                    Read More <span className="ml-2 right-icon">&#8594;</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
