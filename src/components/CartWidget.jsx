import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
  const { getTotalUnits } = useCart();

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      {getTotalUnits() > 0 && (
        <span 
          className="badge" 
          style={{ 
            position: "absolute", 
            top: "-6px", 
            right: "-10px", 
            backgroundColor: "var(--brand2)", 
            color: "#071018", 
            fontWeight: "700" 
          }}
        >
          {getTotalUnits()}
        </span>
      )}
    </div>
  );
}
