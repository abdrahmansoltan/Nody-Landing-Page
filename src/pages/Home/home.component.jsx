import { useEffect, useState } from "react";
import About from "../../components/About/About.component";
import Clients from "../../components/Clients/Clients.component";
import Contact from "../../components/Contact/Contact.component";
import Footer from "../../components/Footer/Footer.component";
import NavbarPage from "../../components/Navbar/Navbar.component";
import Section from "../../components/section/Section.component";
import Services from "../../components/Services/Services.component";

const navItems = [
  { id: 1, idnm: "home", navheading: "Home" },
  { id: 2, idnm: "about", navheading: "About Us" },
  { id: 3, idnm: "services", navheading: "Services" },
  { id: 4, idnm: "clients", navheading: "Clients" },
  { id: 5, idnm: "contact", navheading: "Contact Us" },
];

let pos = document.documentElement.scrollTop;

const Home = () => {
  const [navClass, setNavClass] = useState("");

  const scrollNavigation = () => {
    const scrollup = document.documentElement.scrollTop;
    if (scrollup > pos) {
      setNavClass("nav-sticky");
    } else {
      setNavClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation);
  }, []);

  return (
    <>
      <NavbarPage navItems={navItems} navClass={navClass} />
      <Section />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
