import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
    const { getQuantityProducts } = useContext(contexto);

    return (
        <Link to="/cart">
            <div className={styles.cart}>
                {getQuantityProducts() > 0 && <span className={styles.cartSpan}>{getQuantityProducts()}</span>}
                <ShoppingCartIcon sx={{ size: 30 }} />
            </div>
        </Link>
    );
};

export default CartWidget;
