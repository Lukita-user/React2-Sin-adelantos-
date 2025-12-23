import ItemCount from './ItemCount.jsx';

function ItemDetail({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;