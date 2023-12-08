import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { db } from "../../firabase/firebase";
import { getDocs, collection } from "firebase/firestore";
import "../../styles/header.scss";
function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((result) => {
        let categoriesArr = [];

        for (let doc of result.docs) {
          categoriesArr.push({ id: doc.id, ...doc.data() });
        }
        setCategories(categoriesArr);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="nav" id="nav">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Logo de la pagina" className="logo" />
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
}

export default NavBar;
