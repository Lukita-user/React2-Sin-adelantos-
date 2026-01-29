import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ItemDetail({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div style={{ backgroundColor: "var(--panel)", padding: "1rem", borderRadius: "12px" }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p style={{ color: "var(--ok)", fontWeight: "700" }}>
          Producto agregado al carrito
        </p>
      )}
    </div>
  );
}
