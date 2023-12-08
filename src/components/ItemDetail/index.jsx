import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { contexto } from "../../context/CartContext";
import styles from "./ItemDetail.module.css";

function ItemDetail({ product }) {
    const { addItem, isInCart } = useContext(contexto);
    console.log(product);
    const agregarProducto = (count) => {
        addItem(product, count);
        product.stock -= count;
    };

    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemImage}>
                <img src={product.image} className={styles.image} alt={product.title} />
            </div>
            <div className={styles.itemInformacion}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.description}>{product.description}</p>

                {(!isInCart(product.id) || product.stock > 0) && <ItemCount stock={product.stock} initial={1} onAdd={agregarProducto} />}
                {product.stock === 0 && <div className={styles.sinStock}>Sin stock</div>}
                {isInCart(product.id) && (
                    <Link to="/cart">
                        <button className={styles.terminarCompra}>Terminar mi compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;
