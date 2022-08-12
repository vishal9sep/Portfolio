import { HashLink } from "react-router-hash-link";

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src="/images/logo192.png" alt="Brand Logo" width="75" height="75" />
      </HashLink>
    </div>
  );
}

export default Logo;
