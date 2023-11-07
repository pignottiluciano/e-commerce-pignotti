import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../json/tienda.json";
import "../styles/item-list.scss";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = data.productos.filter((producto) => {
      return categoriaId
        ? producto.tipo.toLowerCase() === categoriaId.toLowerCase()
        : true;
    });

    setProductos(productosFiltrados);
  }, [categoriaId]);

  return (
    <div className="products-container">
      {productos.map((producto) => (
        <div className="product" key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>{producto.tipo}</p>
          <img src={producto.img} alt={producto.nombre} />
          <p>Precio: ${producto.precio}</p>
          <Link to={`/producto/${producto.id}`}>
            <button className="product-button">Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
