import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../json/tienda.json";
import "../styles/item-detail.scss";
import leftArrow from "../assets/left-arrow.svg";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState([]);
  console.log("Producto ID desde URL:", productoId);

  useEffect(() => {
    console.log("Producto ID desde URL:", productoId);
    const productoEncontrado = data.productos.find(
      (item) => item.id === parseInt(productoId, 10)
    );
    console.log("Producto encontrado en JSON:", productoEncontrado);

    setProducto(productoEncontrado);
  }, [productoId]);

  return (
    <div className="item-detail-container">
      <Link to="/productos" className="left-arrow">
        <img src={leftArrow} />
      </Link>

      {producto ? (
        <div className="item" key={producto.id}>
          <img src={producto.img} alt={producto.nombre} />
          <div className="item-description">
            <h2>{producto.nombre}</h2>
            <p>{producto.tipo}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Descripcion: {producto.description}</p>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
