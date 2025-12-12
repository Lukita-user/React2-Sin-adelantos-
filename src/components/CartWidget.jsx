function CartWidget() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <span>🛒</span>
      <span>Carrito</span>
    </div>
  );
}

export default CartWidget;