
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { contexto } from "../../context/CartContext";
import { db } from "../../firabase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import Spinner from "../Spinner";

function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { idProduct } = useParams();
    const { getElement, isInCart } = useContext(contexto);
    let navigate = useNavigate();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, idProduct);
        getDoc(refDoc)
            .then((result) => {
                let quantity = 0;
                if (isInCart(result.id)) {
                    quantity = getElement(result.id).quantity;
                }

                const producto = {
                    id: result.id,
                    ...result.data(),
                    stock: result.data().stock - quantity
                };
                setProduct(producto);
            })
            .catch(() => navigate("/"))
            .finally(() => setLoaded(false));
    }, [idProduct, isInCart, getElement, navigate]);

    return <>{loaded ? <Spinner /> : <ItemDetail product={product} />}</>;
}

export default ItemDetailContainer;
