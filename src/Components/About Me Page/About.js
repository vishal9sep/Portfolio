import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <br></br>
        <p className="about__body">
          Hello! My name is Vishal Singh and I am a Bootcamp graduate from{" "}
          <span className="about__specialText">Masai School, Bengaluru.</span> I
          am a highly passionate{" "}
          <span className="about__specialText">
            Backend developer who loves
          </span>
          , creating APIs, and working with databases. I am also extremely
          interested in creating elegant solutions, more specifically on
          <span className="about__specialText"> System Design </span> and{" "}
          <span className="about__specialText">
            High performaning solutions.
          </span>
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
        <br></br>
        <br></br>
        <br></br>

        <h2 className="about__heading" id="skill">
          My Skills
        </h2>
        <br></br>
        <div className="techstackMarginBox">
          <a href="https://www.java.com/">
            <img
              href="www.google.com"
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://www.javascript.com/">
            {" "}
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://hibernate.org/">
            {" "}
            <img
              className="techstackMargin"
              src="https://design.jboss.org/hibernate/logo/final/hibernate_logo_whitebkg_stacked_256px.gif"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://spring.io/">
            <img
              className="techstackMargin"
              src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://www.mysql.com/">
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://www.w3.org/Style/CSS/Overview.en.html">
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://html.com/">
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://getbootstrap.com/">
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>

          <a href="https://git-scm.com/">
            <img
              className="techstackMargin"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Brand Logo"
              width="60"
              height="60"
            />
          </a>
        </div>
        <div></div>
      </div>
      <img
        className="about__headshot"
        src="images/D.jpg"
        alt="Brand Logo"
        width="300"
        height="300"
      />

      <LightWave />
    </section>
  );
}

export default About;
