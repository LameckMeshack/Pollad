import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";
import Home from "./components/home/Home";
import Price from "./components/Price/Price";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Process />
      <Projects />
      <Price />
    </div>
  );
}

export default App;
