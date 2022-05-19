import About from "../../components/About/About.component";
import Clients from "../../components/Clients/Clients.component";
import Contact from "../../components/Contact/Contact.component";
import Footer from "../../components/Footer/Footer.component";
import Section from "../../components/section/Section.component";
import Services from "../../components/Services/Services.component";

const Home = () => {
  return (
    <>
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
