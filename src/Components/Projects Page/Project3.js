import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/rollDice.png"
          // srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Roll The Dice</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Dice Roller App</span>{" "}
            project created during the bootcamp. I have used{" "}
            <span className="project__specialText">random() method.</span>{" "}
            Features: Here, i have uses random() method to generate random
            number and compare them with each other . After comparing, it
            finally declares the winner at top of the page.
            <span className="project__specialText">It was a solo project</span>,
            executed in 3 hours.{" "}
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · CSS · HTML ·
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/vishal9sep/RollTheDIce/tree/main/RollTheDice"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://silver-kitten-11f354.netlify.app/"
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

export default Project3;
