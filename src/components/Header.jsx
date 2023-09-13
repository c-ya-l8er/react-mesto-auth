import headerLogo from "../images/header_logo.svg";
import {Route, Routes, Link} from "react-router-dom";

function Header({email, loggedIn, onSignOut}) {
  return (
    <header className="header">
      <img src={headerLogo} alt="логотип Место" className="header__logo" />
      <div className="header__navbar"></div>
      <Routes>

      </Routes>
    </header>
  );
}

export default Header;
