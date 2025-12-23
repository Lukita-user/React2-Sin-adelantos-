import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data.js';
import ItemList from './ItemList.jsx';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = categoryId ? getProductsByCategory : getProducts;

    fetchProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error cargando productos:', error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section>
      <h2>Catálogo {categoryId ? `- ${categoryId}` : ''}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;
