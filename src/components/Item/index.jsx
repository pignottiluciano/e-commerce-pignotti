import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item(props) {
    return (
        <div className={styles.article}>
            <div className={styles.image}>
                <img className={styles.articleImage} src={props.productInfo.image} alt={props.productInfo.title} />
            </div>
            <p className={styles.title}>{props.productInfo.title}</p>
            <div className={styles.price}>${props.productInfo.price}</div>
            <Link to={`/item/${props.productInfo.id}`}>
                <button className={styles.verDetalle}>Ver detalle</button>
            </Link>
        </div>
    );
}

export default Item;
