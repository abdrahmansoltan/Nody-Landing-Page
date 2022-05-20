import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

import "./Navbar.styles.scss";

// Import Logo
import logodark from "../../assets/images/logo-dark.png";

const NavbarPage = (props) => {
  let targetId = props.navItems.map((item) => {
    return item.idnm;
  });

  return (
    <>
      <Navbar
        expand="lg"
        fixed={props.top === true ? "top" : ""}
        className={
          props.navClass +
          " fixed-top navbar-custom sticky sticky-dark align-items-center"
        }
        id="navbar"
      >
        <Container>
          {/* LOGO */}
          <Link className="logo mr-3" to="/">
            <img src={logodark} alt="" height="26" />
          </Link>

          <Collapse
            id="navbarCollapse"
            isOpen={false}
            className=" navbar-collapse"
          >
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="navbar-nav navbar-center" id="navbar-navlist">
                {props.navItems.map((item, key) => (
                  <NavItem key={key}>
                    <NavLink href={"#" + item.idnm}>{item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
