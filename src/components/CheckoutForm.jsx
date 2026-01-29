import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { createOrder } from "../services/firestore.js";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Tu carrito está vacío</h2>
        <button className="btn primary" onClick={() => navigate("/")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    try {
      const id = await createOrder({
        buyer,
        items: cart,
        total: getTotalPrice(),
      });
      setOrderId(id);
      clearCart();
    } catch {
      setError("Error al generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button className="btn primary" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          required
          className="btn"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
          className="btn"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
          className="btn"
        />
        {error && <p style={{ color: "var(--danger)" }}>{error}</p>}
        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
}
