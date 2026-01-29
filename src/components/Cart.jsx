import { useCart } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h2>Carrito de compras</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <hr className="sep" />
      <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>
        Total: ${getTotalPrice()}
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="btn" onClick={() => clearCart()}>
          Vaciar carrito
        </button>
        <button className="btn primary" onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>
      </div>
    </section>
  );
}
