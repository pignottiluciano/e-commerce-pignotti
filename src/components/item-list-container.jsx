import PropTypes from "prop-types";

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h2>{props.message}</h2>
    </div>
  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ItemListContainer;
