import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
