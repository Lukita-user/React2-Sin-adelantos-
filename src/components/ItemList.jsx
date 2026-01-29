import Item from "./Item.jsx";

export default function ItemList({ products }) {
  if (products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
}
