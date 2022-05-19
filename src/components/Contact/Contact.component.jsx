import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row, Button } from "react-bootstrap";

import "./Contact.styles.scss";

// Import Icons
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Contact_img from "../../assets/images/contact-img.png";

function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2 className="">Contact Us</h2>
                <p className="text-muted">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis suscipit laboriosam nisi commodi consequatur.
                </p>
              </div>
            </Col>
          </Row>

          {/* AVATAR */}
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="mb-5 mb-lg-0">
                <div className="text-center">
                  <img
                    src={Contact_img}
                    alt=""
                    className="img-fluid d-block w-75 mx-auto"
                  />
                  <h4 className="mt-4">Are You Facing Any Problem..?</h4>
                  <p className="text-muted mb-4">
                    It va esser tam simplic quam Occidental in fact it va esser
                    Occidental angles quam un skeptic cambridge es.
                  </p>
                  <Link to="#" className="btn btn-success">
                    <FeatherIcon
                      className="icon mr-2 icon-fill-white"
                      icon="message-circle"
                    />{" "}
                    Start Live Chat
                  </Link>
                  <p className="mt-4">Or you can contact at</p>
                  <Row>
                    <Col md={6}>
                      <Link to="#">
                        <div className="badge f-14 bg-soft-dark text-muted">
                          <span className="text-dark mr-1">Email:</span>{" "}
                          Youremailid@gmail.com
                        </div>
                      </Link>
                    </Col>
                    <Col md={6} className="mt-2 mt-sm-0">
                      <Link to="#">
                        <div className="badge f-14 bg-soft-dark text-muted">
                          <span className="text-dark mr-1">Phone:</span> (001)
                          1234 567 890
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* FORM */}
            <Col lg={5} className="offset-lg-1">
              <h4 className="line-height-1_4 mb-4">Get in Touch</h4>
              <div className="custom-form mt-4 mt-lg-0">
                <div id="message"></div>

                <Form method="post" name="contact-form" id="contact-form">
                  <Row>
                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Form.Label for="name" className="text-muted">
                          First Name
                        </Form.Label>
                        <Form.Control
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter. . ."
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Form.Label for="lastname" className="text-muted">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          name="lastname"
                          id="lastname"
                          type="text"
                          className="form-control"
                          placeholder="Enter. . ."
                        />
                      </FormGroup>
                    </Col>

                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Form.Label for="email" className="text-muted">
                          Your Email
                        </Form.Label>
                        <Form.Control
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email. . ."
                        />
                      </FormGroup>
                    </Col>

                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Form.Label for="comments" className="text-muted">
                          Type Massage
                        </Form.Label>
                        <Form.Control
                          name="comments"
                          id="comments"
                          type="textarea"
                          rows="4"
                          className="form-control"
                          placeholder="Message. . ."
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <Button
                        color="primary"
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                      >
                        Send Message
                      </Button>
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
