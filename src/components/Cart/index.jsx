import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexto } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { db } from "../../firabase/firebase";
import {
  doc,
  addDoc,
  getDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import swal from "sweetalert";
import "./cart-products.scss";

const Cart = () => {
  const { products, removeItem, getTotal, clear, updateStock } =
    useContext(contexto);
  let navigate = useNavigate();

  function checkStock(items) {
    return new Promise((resolve, reject) => {
      const productsCollection = collection(db, "products");
      let itemsWithoutStock = [];
      for (let itemIndex in items) {
        const docRef = doc(productsCollection, items[itemIndex].id);
        getDoc(docRef)
          .then((result) => {
            if (
              result.exists() &&
              result.data().stock < items[itemIndex].quantity
            ) {
              itemsWithoutStock.push({ ...result.data(), id: result.id });
            }
          })
          .catch((err) => reject(err));
      }
      setTimeout(() => {
        resolve(itemsWithoutStock);
      }, 2000);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    checkStock(products)
      .then((result) => {
        if (result.length === 0) {
          const ventasCollection = collection(db, "ventas");
          addDoc(ventasCollection, {
            buyer: {
              name: `${event.target["name"].value} ${event.target["lastname"].value}`,
              phone: event.target["phone"].value,
              email: event.target["email"].value,
            },
            items: products,
            date: serverTimestamp(),
            total: getTotal(),
          })
            .then((result) => {
              const idVenta = result.id;
              products.forEach((product) => {
                const updateCollection = doc(db, "products", product.id);
                updateDoc(updateCollection, {
                  stock: product.stock - product.quantity,
                }).then(() => {
                  clear();
                  swal(
                    "Compra realizada con éxito",
                    "ID Venta: " + idVenta,
                    "success"
                  ).then(() => {
                    navigate("/");
                  });
                });
              });
            })
            .catch((err) => {
              swal(
                "¡Lo sentimos!",
                "Ha ocurrido un error con su compra. Por favor intente nuevamente.",
                "error"
              );
              console.error(err);
            });
        } else {
          for (let productWithoutStock of result) {
            let productCartIndex = products.findIndex(
              (product) => product.id === productWithoutStock.id
            );
            updateStock({
              ...products[productCartIndex],
              stock: productWithoutStock.stock,
            });
          }
          swal(
            "¡Lo sentimos!",
            "Algunos articulos de tu carrito han quedado con menos stock del solicitado. Por favor revise su orden de nuevo.",
            "error"
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {products.length > 0 && (
        <div className="container">
          <div className="cartContainer">
            <h2>Productos</h2>
            <table className="productTable">
              {products.map((product) => (
                <ItemCart
                  key={product.id}
                  item={product}
                  removeItem={removeItem}
                />
              ))}
            </table>
            <div className="total">Total: ${getTotal().toFixed(2)}</div>
          </div>
          <div className="datosUsuario">
            <h2>Finalizar compra</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="inputForm"
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
              <input
                className="inputForm"
                type="text"
                name="lastname"
                placeholder="Apellido"
                required
              />
              <input
                className="inputForm"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="inputForm"
                type="email"
                name="confirmar-email"
                placeholder="Confirmar email"
                required
              />
              <input
                className="inputForm"
                type="phone"
                name="phone"
                placeholder="Telefono"
                required
              />
              <button className="buttonForm" type="submit">
                Confirmar compra
              </button>
            </form>
          </div>
        </div>
      )}

      {products.length === 0 && (
        <div className="noProducts">
          <span>No hay articulos en el carrito.</span>
          <Link to="/" className="irTienda">
            <span>Ir a la tienda</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
