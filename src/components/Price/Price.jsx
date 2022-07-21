import { BsCheckLg } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import "./price.css";

const Price = () => {
  return (
    <div className="pricing">
      <p>PRICING</p>
      <h1>Our Pricing Plan</h1>
      <div className="pricing-container">
        <div className="pricing-item">
          <img
            src="./Images/offered/IT.png"
            alt=""
            height="90px"
            width="90px"
          />
          <p>
            $<span>29.99</span>
          </p>
          <p>Monthly Package</p>
          <hr width="80%" />
          <div className="features">
            <div className="ft-text">
              <p> Powerful Admin Panel</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p> 1 Native Android App</p>
              <GrFormClose />{" "}
            </div>
            <div className="ft-text">
              <p>Multi-Language Support</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p>Support via E-mail and Phone</p>
              <BsCheckLg />{" "}
            </div>
          </div>
          <div style={{ backgroundColor: "#C0C0C0" }} className="barge">
            <h3>SILVER</h3>
          </div>
          <button className="btn-buy">BUY NOW</button>
        </div>
        <div className="pricing-item gold">
          <img
            src="./Images/offered/IT.png"
            alt=""
            height="90px"
            width="90px"
          />
          <p>
            $<span>29.99</span>
          </p>
          <p>Monthly Package</p>
          <hr width="80%" />
          <div className="features">
            <div className="ft-text">
              <p> Powerful Admin Panel</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p> 1 Native Android App</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p>Multi-Language Support</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p>Support via E-mail and Phone</p>
              <BsCheckLg />{" "}
            </div>
          </div>
          <div style={{ backgroundColor: "#FFD700" }} className="barge">
            <h3>GOLD</h3>
          </div>
          <button className="btn-buy">BUY NOW</button>
        </div>
        <div className="pricing-item">
          <img
            src="./Images/offered/IT.png"
            alt=""
            height="90px"
            width="90px"
          />
          <p>
            $<span>29.99</span>
          </p>
          <p>Monthly Package</p>
          <hr width="80%" />
          <div className="features">
            <div className="ft-text">
              <p> Powerful Admin Panel</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p> 1 Native Android App</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p>Multi-Language Support</p>
              <BsCheckLg />{" "}
            </div>
            <div className="ft-text">
              <p>Support via E-mail and Phone</p>
              <BsCheckLg />{" "}
            </div>
          </div>
          <div style={{ backgroundColor: "#E5E4E2" }} className="barge">
            <h3>PLATINUM</h3>
          </div>
          <button className="btn-buy">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
