import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import "./Footer.styles.scss";

// Import Icons
import FeatherIcon from "feather-icons-react";

// Import Images
import footer_img from "../../assets/images/hero-1-bg-img.png";
import logolight_img from "../../assets/images/logo-light.png";

const links = [
  {
    id: 1,
    title: "Customer",
    child: [
      { title: "Works", link: "/" },
      { title: "Strategy", link: "/" },
      { title: "Releases", link: "/" },
      { title: "Press", link: "/" },
      { title: "Mission", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Product",
    child: [
      { title: "Tranding", link: "/" },
      { title: "Popular", link: "/" },
      { title: "Customers", link: "/" },
      { title: "Features", link: "/" },
    ],
  },
  {
    id: 3,
    title: "Learn More",
    child: [
      { title: "Developers", link: "/" },
      { title: "Support", link: "/" },
      { title: "Customer Service", link: "/" },
      { title: "Get Started", link: "/" },
      { title: "Guide", link: "/" },
    ],
  },
];

function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={{ backgroundImage: `url(${footer_img})` }}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <div className="mb-5">
                <Link to="#">
                  <img src={logolight_img} alt="" className="" height="35" />
                </Link>
                <p className="text-white-50 my-4">
                  Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                  ante ipsum primis in faucibus ultrices posuere cubilia.
                </p>
                <Link to="#" className="text-white-70">
                  <FeatherIcon className="icon mr-1" icon="instagram" /> Join Us
                  In Instagram
                </Link>
              </div>
            </Col>

            <Col lg={7} className="offset-lg-1">
              <Row>
                {links.map((item, key) => (
                  <Col md={4} key={key}>
                    <h4 className="text-white f-22 font-weight-normal mb-3">
                      {item.title}
                    </h4>

                    <ul className="list-unstyled footer-sub-menu">
                      {item.child.map((linkItem, key) => (
                        <li key={key}>
                          <Link className="footer-link" to={linkItem.link}>
                            {linkItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="text-center mt-5">
                <p className="text-white-50 f-15 mb-0">
                  {new Date().getFullYear()} © Nody. Develop By Abdelrahman
                  Soltan
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
