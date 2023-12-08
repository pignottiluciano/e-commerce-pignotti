import { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const sacarProducto = () => {
        if (count - 1 >= initial) setCount(count - 1);
    };

    const agregarProducto = () => {
        if (stock >= count + 1) setCount(count + 1);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.stock}>
                    <span>Unidades disponibles: {stock}</span>
                </div>
                <div className={styles.containerCount}>
                    <div className={styles.button} onClick={sacarProducto}>
                        -
                    </div>
                    <div className={styles.count}>{count <= stock ? count : setCount(stock)}</div>
                    <div className={styles.button} onClick={agregarProducto}>
                        +
                    </div>
                </div>
                {count <= stock && (
                    <button
                        className={styles.buttonAdd}
                        onClick={() => {
                            onAdd(count);
                        }}
                    >
                        Agregar al carrito
                    </button>
                )}
            </div>
        </>
    );
}

export default ItemCount;
