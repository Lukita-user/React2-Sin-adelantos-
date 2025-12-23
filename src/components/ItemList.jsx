import { Link } from 'react-router-dom';

function ItemList({ products }) {
  if (products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id} style={{ marginBottom: '1rem' }}>
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>
          <Link to={`/product/${product.id}`}>Ver detalle</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;