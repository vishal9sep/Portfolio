import PurpleArrows from "../LandingPage/PurpleArrows";
import DarkWave from "../Waves/DarkWave";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, My name is</span>
        <h1 className="landing__mainText">Vishal Singh.</h1>
        <h1 className="landing__mainText">I love to code.</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Java Backend</h1>
        <h1 className="landing__mainText">Developer</h1>
      </div>

      <PurpleArrows />

      <LeftSocialMediaIcons />

      <DarkWave />
    </section>
  );
}

export default Landing;
