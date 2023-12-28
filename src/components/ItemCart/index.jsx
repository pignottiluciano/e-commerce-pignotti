import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ItemCart.module.css";

const ItemCart = ({ item, removeItem }) => {
  return (
    <tr className={styles.itemCart}>
      <td className={styles.imgContainer}>
        <img className={styles.image} src={item.image} alt={item.title} />
      </td>
      <td className={styles.information}>
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
      </td>
      <td className={styles.quantity}>
        <span
          className={
            item.stock < item.quantity
              ? styles.quantityWithoutStock
              : styles.quantity
          }
        >
          {item.quantity}
        </span>
      </td>
      <td className={styles.price}>
        <span>${item.price.toFixed(2)}</span>
      </td>
      <td className={styles.totalPrice}>
        <span>${(item.price * item.quantity).toFixed(2)}</span>
      </td>
      <td className={styles.removeButton}>
        <button className={styles.remove} onClick={() => removeItem(item.id)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

ItemCart.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ItemCart;
