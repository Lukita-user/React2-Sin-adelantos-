import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <li
      style={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "var(--panel)",
        padding: "1rem",
        borderRadius: "12px",
      }}
    >
      <img
        src={product.image || "/default-product.jpg"} // Usa la imagen del producto o la default si no existe
        alt={product.title}
        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
      />
      <div>
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <Link to={`/product/${product.id}`} style={{ color: "var(--brand2)" }}>
          Ver detalle
        </Link>
      </div>
    </li>
  );
}

