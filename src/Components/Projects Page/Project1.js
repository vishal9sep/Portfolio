import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import "./ProjectLight.css";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        {/* <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        /> */}
        {isDesktopOrLaptop ? (
          <>
            {/* <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            /> */}
            <img
              className="project__image"
              src="/images/cabBook.png"
              alt="Health Fusion Project Add Page"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">
            REST API for Online Cab Booking App
          </h3>
          <p className="project__description project__body">
            We have create a{" "}
            <span className="project__specialText">REST API</span> for online
            Cab Booking Application which can be used by{" "}
            <span className="project__specialText">Customers</span> to login
            into their profile,{" "}
            <span className="project__specialText">
              update their information
            </span>{" "}
            and book cabs, by a driver to login and update their details along
            with their cab details and accept a ride from the customer.update
            their information.
            <span className="project__specialText"> All this is</span> over
            looked by the admin who can also login and update their information
            as well as access the{" "}
            <span className="project__specialText">
              {" "}
              data in the application.
            </span>{" "}
            We have implemented data and user validation at every step, for
            every user.{" "}
            <span className="project__specialText">
              A collaborative project
            </span>{" "}
            built by a team of 5, executed in 5 days.
          </p>
          <p className="project__tech project__body">
            &gt; Java · SpringBoot · Hibernate · Spring Data JPA · MySQL · Maven
            · Swagger UI
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Oneza786/Online-Cab-Booking-App"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          {/* <a
            className="project__sourceCode"
            href="https://github.com/Oneza786/Online-Cab-Booking-App"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a> */}
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
