import { useState } from 'react';

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    alert(`Agregaste ${count} unidad(es) al carrito.`);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={decrement} disabled={count <= 1}>-</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={increment} disabled={count >= stock}>+</button>
      <br />
      <button onClick={handleAdd} style={{ marginTop: '0.5rem' }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
