import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Process from "../components/Process/Process";
import Projects from "../components/Projects/Projects";
import Price from "../components/Price/Price";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partner/Partners";
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
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;
