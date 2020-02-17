import React from "react";
import Link from "../Link";
import "./styles.css";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__logo">
        <img
          src="https://i.ya-webdesign.com/images/png-image-library-6.png"
          alt="Logo"
        />
      </Link>
    </div>
  </header>
);

export default Header;
