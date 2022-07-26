import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Process from "../components/Process/Process";
import Projects from "../components/Projects/Projects";
import Price from "../components/Price/Price";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partner/Partners";
import Map from "../components/Map/Map";
import GetINTouch from "../components/GetInTouch/GetINTouch";
const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
      <Process />
      <Projects />
      <Price />
      <GetINTouch />
      <Map />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;
