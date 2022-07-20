import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="abt-container">
        <img src="./Images/about.webp" alt="" />
        <div className="abt-contents">
          <div className="top">
            <span className="line2">--- ------</span> <h3>ABOUT US</h3>
          </div>
          <h2>
            We Are Increasing Business <br />
            Success With Technology
          </h2>
          <p className="p1">
            Over 25 years working in IT services developing software
            applications and mobile apps for clients all over the world.
          </p>
          <p className="p2">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
