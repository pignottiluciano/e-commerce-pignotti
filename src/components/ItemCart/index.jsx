import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ItemCart.module.css";

const ItemCart = ({ item, removeItem }) => {
  return (
    <div className={styles.itemCart}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={item.image} alt={item.title} />
      </div>
      <div className={styles.information}>
        <Link to={"/item/" + item.id} className={styles.title}>
          <span
            className={
              item.stock < item.quantity
                ? styles.titleWithouStock
                : styles.title
            }
          >
            {item.title}
          </span>
        </Link>
        <span
          className={
            item.stock < item.quantity
              ? styles.quantityWithoutStock
              : styles.quantity
          }
        >
          {item.quantity}
        </span>
        <span className={styles.price}>${item.price.toFixed(2)}</span>
        <span className={styles.totalPrice}>
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <div className={styles.removeButton}>
          <button className={styles.remove} onClick={() => removeItem(item.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ItemCart;
