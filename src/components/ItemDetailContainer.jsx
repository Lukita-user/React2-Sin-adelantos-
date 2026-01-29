import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/firestore.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(productId)
      .then((data) => {
        if (!data) setError("Producto no encontrado");
        setProduct(data);
      })
      .catch(() => setError("Error cargando producto"))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;

  return <ItemDetail product={product} />;
}
