import React from "./getInTouch.css";
import { FaHome } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsTelephoneFill } from "react-icons/bs";

const GetINTouch = () => {
  return (
    <div className="touch">
      <div className="touch-container">
        <div className="touch-box">
          <p>LET'S TALK</p>
          <h3>Speak With Expert Engineers.</h3>
          <div className="touch-item">
            <div className="icon">
              <FaHome />
            </div>
            <div className="touch-text">
              <h4>Email</h4>
              <p>(+088)589-8745</p>
            </div>
          </div>
          <div className="touch-item">
            <div className="icon">
              <BsTelephoneFill />
            </div>
            <div className="touch-text">
              <h4>Email</h4>
              <p>(+088)589-8745</p>
            </div>
          </div>
          <div className="touch-item">
            <div className="icon">
              <GoLocation />
            </div>
            <div className="touch-text">
              <h4>Lacation</h4>
              <p> KCA Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="touch-form">
          <h3>GET IN TOUCH</h3>
          <p>Fill out the form below to get in touch with us.</p>
          <form>
            <div className="inp-cont">
              <div className="form-group">
                <input
                  type="text"
                  className="form"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  className="form"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="link"
                  className="form"
                  id="website"
                  placeholder="Website"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="textarea"
                id="message"
                placeholder="Enter message"
                rows="4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetINTouch;
