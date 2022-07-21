import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <p>PROJECTS</p>
      <h1>
        Our Recent Launched Projects <br />
        Available into Market
      </h1>
      <div className="projects-container">
        <div className="prjct-arrow-right">
          <div className="arrow ">
            <AiOutlineLeft />
          </div>
        </div>
        <div className="project">
          <div className="img-cont">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project"
            />
          </div>
          <div className="project-text">
            <h2>Project 1</h2>
            <p>IT Technology</p>
          </div>
        </div>
        <div className="project">
          <div className="img-cont">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project"
            />
          </div>
          <div className="project-text">
            <h2>Project 1</h2>
            <p>IT Technology</p>
          </div>
        </div>
        <div className="project">
          <div className="img-cont">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project"
            />
          </div>
          <div className="project-text">
            <h2>Project 1</h2>
            <p>IT Technology</p>
          </div>
        </div>

        <div className="prjct-arrow-left">
          <div className="arrow ">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
