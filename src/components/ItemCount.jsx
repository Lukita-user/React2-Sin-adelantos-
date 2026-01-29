import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={decrement} disabled={count <= 1} className="btn">
        -
      </button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={increment} disabled={count >= stock} className="btn">
        +
      </button>
      <br />
      <button onClick={() => onAdd(count)} className="btn primary" style={{ marginTop: "0.5rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
}
