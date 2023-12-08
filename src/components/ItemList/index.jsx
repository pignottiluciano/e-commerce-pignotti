import Item from "../Item";
import styles from "./ItemList.module.css";
import PropTypes from "prop-types";

function ItemList({ products }) {
  console.log("productos", products);
  return (
    <div className={styles.listItems}>
      {products &&
        products.map((product) => {
          return <Item key={product.id} productInfo={product} />;
        })}
    </div>
  );
}
ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      categoty: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
