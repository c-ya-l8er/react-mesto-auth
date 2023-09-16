import headerLogo from "../images/header_logo.svg";
import { Route, Routes, Link } from "react-router-dom";

function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип Место" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__navbar">
              <p className="header__email">{email}</p>
              <a
                className="header__link header__link_logged"
                onClick={onSignOut}
              >
                Выйти
              </a>
            </div>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
