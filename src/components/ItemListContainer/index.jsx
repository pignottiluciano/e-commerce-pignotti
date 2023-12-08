import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firabase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import Spinner from "../Spinner";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let q = null;
    if (idCategory) {
      q = query(productsCollection);
    }

    getDocs(q ? q : productsCollection)
      .then((result) => {
        const lista = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(lista);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoaded(false), console.log(products));
    return setLoaded(true);
  }, [idCategory]);

  return <>{loaded ? <Spinner /> : <ItemList products={products} />}</>;
}

export default ItemListContainer;
