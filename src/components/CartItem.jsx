import { useCart } from "../context/CartContext.jsx";

export default function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "var(--panel)",
        padding: "1rem",
        borderRadius: "12px",
        marginBottom: "1rem",
        alignItems: "center",
      }}
    >
      <div>
        <h3>{item.title}</h3>
        <p>
          Cantidad: {item.quantity} x ${item.price} = ${item.quantity * item.price}
        </p>
      </div>
      <button className="btn" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </li>
  );
}
