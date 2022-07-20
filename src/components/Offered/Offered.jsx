import "./offered.css";

const Offered = () => {
  return (
    <div className="offered-container">
      <div className="offered">
        <img src="./Images/offered/IT.png" alt="" height="90px" width="90px" />
        <h2>IT Management</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>

      <div className="offered">
        <img
          src="./Images/offered/cloud.png"
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
      <div className="offered">
        <img src="./Images/offered/ds.png" alt="" height="90px" width="90px" />
        <h2>Data Security</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>
      <div className="offered">
        <img src="./Images/offered/ml.png" alt="" height="90px" width="90px" />
        <h2>Machine Learning</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae
          iste incidunt.
        </p>
      </div>
    </div>
  );
};

export default Offered;
