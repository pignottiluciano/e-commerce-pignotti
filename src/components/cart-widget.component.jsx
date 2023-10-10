import CartIcon from "../assets/bag.png";
import "../styles/cart.scss";
const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={CartIcon} alt="icon" className="icon-cart" />
    </div>
  );
};

export default CartWidget;
