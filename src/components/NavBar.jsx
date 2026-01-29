import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MiTienda</div>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={handleLinkClick} className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/category/retrato" onClick={handleLinkClick} className="nav-link">
          Retratos
        </NavLink>
        <NavLink to="/category/caricatura" onClick={handleLinkClick} className="nav-link">
          Caricaturas
        </NavLink>
        <NavLink to="/category/ilustracion" onClick={handleLinkClick} className="nav-link">
          Ilustraciones
        </NavLink>
        <NavLink to="/cart" onClick={handleLinkClick} className="nav-link">
          Carrito
        </NavLink>
      </div>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}
