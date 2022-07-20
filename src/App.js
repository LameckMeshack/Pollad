import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";
import Home from "./components/home/Home";
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
    </div>
  );
}

export default App;
