import "./home.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <div className="bg-image">
        <div className="home-container">
          <div className="arrow left">
            <AiOutlineLeft />
          </div>
          <div className="home-content">
            <span className="first">We increase your</span>
            <span className="second"> Business Success</span>
            <span className="third">
              Using Modern Technology and IT Services
            </span>
            <div className="clicks">
              <button className="consult">Free Consultation</button>

              <IoMdPlay className="play" />
            </div>
          </div>
          <div className="arrow right">
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <div className="services-container">
        <Services />
      </div>
    </>
  );
};

export default Home;
