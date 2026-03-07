import { Link } from "react-router";
import logo from "../../assets/images/icon.png";
import logoText from "../../assets/images/text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import { useState } from "react";

export function Header() {
  const [menuState, setMenuState] = useState("close");
  const [menuButtonState, setMenuButtonState] = useState("normal");

  return (
    <header>
      <nav className="big-screen">
        <Link to="/">
          <img className="logo-icon" src={logoText} alt="logo" />
        </Link>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/recipes">Receitas</Link>
          <button className="show-meals">Refeições</button>
        </div>
        <button className="schedule">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
        </button>
      </nav>
      <nav className="mobile">
        <img className="logo-icon" src={logo} alt="logo" />
        <img className="mobile-logo-text" src={logoText} alt="logo" />
        <button
          className={`show-menu ${menuButtonState}`}
          onClick={() => {
            setMenuState(menuState == "open" ? "close" : "open");
            setMenuButtonState(menuState == "open" ? "normal" : "down");
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div className={`menu ${menuState}`}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Receitas</Link>
        <Link to="/">Café da manhã</Link>
        <Link to="/">Almoço</Link>
        <Link to="/">Jantar</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Termos</Link>
      </div>
    </header>
  );
}
