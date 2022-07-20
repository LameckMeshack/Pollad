import "./services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <img src="./Images/services/IT.png" alt="" height="90px" width="90px" />
        <h2>IT Management</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>

      <div className="service">
        <img
          src="./Images/services/cloud.png"
          alt=""
          height="90px"
          width="90px"
        />
        <h2>Cloud Services</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>
      <div className="service">
        <img src="./Images/services/ds.png" alt="" height="90px" width="90px" />
        <h2>Data Security</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>
      <div className="service">
        <img src="./Images/services/ml.png" alt="" height="90px" width="90px" />
        <h2>Machine Learning</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>
    </div>
  );
};

export default Services;
