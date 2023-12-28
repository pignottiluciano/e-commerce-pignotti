import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firabase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import Spinner from "../Spinner";
import styles from "./ItemListContainer.module.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { idCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let q = null;

    if (selectedCategory) {
      q = query(productsCollection, where("category", "==", selectedCategory));
    }

    getDocs(q ? q : productsCollection)
      .then((result) => {
        const lista = result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(lista);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoaded(false));
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className={styles.filters}>
        <label htmlFor="categoryFilter">Filtrar por categoría: </label>
        <select
          className={styles.selectCategory}
          id="categoryFilter"
          value={selectedCategory || ""}
          onChange={handleCategoryChange}
        >
          <option value="">Todas las categorías</option>
          <option value="auricular">Auriculares</option>
          <option value="notebook">Notebooks</option>
        </select>
        <button onClick={() => setSelectedCategory(null)}>
          Limpiar Filtro
        </button>
      </div>

      {loaded ? <Spinner /> : <ItemList products={products} />}
    </>
  );
}

export default ItemListContainer;
