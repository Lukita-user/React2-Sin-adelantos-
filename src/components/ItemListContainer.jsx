import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/firestore.js";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProducts = categoryId ? getProductsByCategory : getProducts;

    fetchProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError("Error cargando productos");
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return <ItemList products={products} />;
}
