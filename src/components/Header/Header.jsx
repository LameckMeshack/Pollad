import "./header.css";
import { BsEnvelope, BsTwitter } from "react-icons/bs";
import { TbBrandInstagram, TbPhoneCall } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsGeoAlt } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <div className="details">
      <div className="container">
        <div className="address">
          <div>
            <BsEnvelope className="icn" />
            support@pollad.com
          </div>
          <div className="line">|</div>
          <div>
            <TbPhoneCall className="icn" />
            +254718494999
          </div>
          <div className="line">|</div>

          <div>
            <BsGeoAlt className="icn" />
            04 Kca University.Nairobi
          </div>
        </div>

        <div className="time">
          <div>
            <BiTimeFive className="icn" /> 08:00am - 17:00pm{" "}
          </div>
          <div className="line">|</div>{" "}
          <div className="social ">
            <CgFacebook className="icn" />
            <BsTwitter className="icn" />
            <FaPinterestP className="icn" />
            <TbBrandInstagram className="icn" />
            <IoLogoWhatsapp className="icn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
