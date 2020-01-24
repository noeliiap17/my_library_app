import React from "react";
import Link from "../Link";
import "./styles.css";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fox_Movies_%28Asia%29_logo.svg/1280px-Fox_Movies_%28Asia%29_logo.svg.png"
          alt="Logo"
        />
      </Link>
    </div>
  </header>
);

export default Header;
