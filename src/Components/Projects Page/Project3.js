import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project3() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">Movie App</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Movie App</span> project
            just like IMDB created during the bootcamp. I have used{" "}
            <span className="project__specialText">IMDB API.</span> Features:{" "}
            Favourite Section - I have implemented Debouncing concept in the
            search section..
            <span className="project__specialText">
              {" "}
              It was a solo project
            </span>{" "}
            ,executed in 6 hours.{" "}
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · HTML · CSS · API
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/vishal9sep/MovieApp/blob/master/index.HTML"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://beamish-strudel-4d2e88.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/movieApp.png"
          // srcset="/images/covid_bot_project_image_small.png 750w, /images/covid_bot_project_image_large.png 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project3;
