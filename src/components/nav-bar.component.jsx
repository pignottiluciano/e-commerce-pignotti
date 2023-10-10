import "../styles/header.scss";
import CartWidget from "./cart-widget.component";
import LogoIcon from "../assets/logo.png";
import CloseIcon from "../assets/close.svg";
import MenuIcon from "../assets/menu.svg";

const NavBar = () => {
  return (
    <nav className="nav" id="nav">
      <a href="./index.html" className="nav-logo">
        <img src={LogoIcon} alt="Logo de la pagina" className="logo" />
        <h2>Tienda </h2>
      </a>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="./index.html" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Productos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contacto
          </a>
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
