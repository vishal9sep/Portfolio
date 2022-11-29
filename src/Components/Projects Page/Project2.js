import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project2() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/OverStock.png"
          alt="Health Fusion Project Add Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">OverStock Clone</h3>
          <p className="project__description project__body">
            OverStock is a{" "}
            <span className="project__specialText"> American</span> E-Commerce
            platform.{" "}
            <span className="project__specialText">OverStock provides you</span>{" "}
            with many varieties of furniture and household items and allows our
            end users to choose and purchase any product which is listed on the
            website. Users can sort products based on prices and ratings{" "}
            <span className="project__specialText">We are giving our </span>100%
            to built it same as OverStock.{" "}
            <span className="project__specialText">There are lots </span>
            of features on this website we have built.
            <span className="project__specialText">
              A collaborative project
            </span>
            {"\n"}built by a team of 5, executed in 5 days.
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · CSS · HTML
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/vishal9sep/OverStock-Clone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://jade-sopapillas-ac0a87.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project2;
