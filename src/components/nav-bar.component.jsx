import "../styles/header.scss";
import CartWidget from "./cart-widget.component";
import LogoIcon from "../assets/logo.png";
import CloseIcon from "../assets/close.svg";
import MenuIcon from "../assets/menu.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav" id="nav">
      <Link to="/" className="nav-logo">
        <img src={LogoIcon} alt="Logo de la pagina" className="logo" />
        <h2>Tienda </h2>
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link">
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Contacto
          </Link>
        </li>
        <li className="nav-item">
          <CartWidget />
        </li>
      </ul>

      <a href="#nav" className="nav-hamburguer">
        <img src={MenuIcon} className="nav-icon" />
      </a>

      <a href="#" className="nav-close">
        <img src={CloseIcon} className="nav-icon" />
      </a>
    </nav>
  );
};

export default NavBar;
