import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { TbBrandInstagram } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="row primary">
        <div className="column footer-about">
          <h3>Pollad Developer</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>

          <div className="social2">
            <i className="fa-brands fa-facebook-square">
              <CgFacebook />
            </i>
            <i className="fa-brands fa-instagram-square">
              <BsTwitter />
            </i>
            <i className="fa-brands fa-twitter-square">
              <FaPinterestP />
            </i>
            <i className="fa-brands fa-youtube-square">
              <TbBrandInstagram />
            </i>
            <i className="fa-brands fa-whatsapp-square">
              <IoLogoWhatsapp />
            </i>
          </div>
        </div>

        <div className="column links">
          <h3>Some Links</h3>

          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button className="btn-footer">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <div className="footer-menu">
          <Link to="#"> Home</Link>
          <Link to="#"> About</Link>
          <Link to="#"> Contact</Link>
          <Link to="#"> Blog</Link>
          <Link to="#"> Social</Link>
        </div>
        <p>Copyright &copy; 2021 Foolish Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
