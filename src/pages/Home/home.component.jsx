import About from "../../components/About/About.component";
import Clients from "../../components/Clients/Clients.component";
import Section from "../../components/section/Section.component";
import Services from "../../components/Services/Services.component";

const Home = () => {
  return (
    <>
      <Section />
      <About />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
