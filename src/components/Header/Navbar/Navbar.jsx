import { FaSearch } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <a href="/" className="brand">
          <img src="/Images/bg.png" alt="pollad" width="150" />
          <span>POLLAD</span>
        </a>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Portfolios</a>
          <a href="/">Team</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
