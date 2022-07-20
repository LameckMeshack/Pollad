import "./contact.css";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <img src="./Images/contact/person.webp" alt="" width="40%" />
        <div className="contact-contents">
          <div className="call">
            <MdCall />
          </div>
          <h3>CALL US 24/7</h3>
          <h1>(+123) 456-9989</h1>
          <h4>
            Have any idea or project for in your mind call us or schedule a
            <br />
            appointment. Our representative will reply you shortly.
          </h4>
          <button className="btn-contact">Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
