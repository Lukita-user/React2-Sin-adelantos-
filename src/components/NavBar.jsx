import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <nav>
      <div className="logo">MiTienda</div>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/category/retrato">Retratos</Link>
        <Link to="/category/caricatura">Caricaturas</Link>
        <Link to="/category/ilustracion">Ilustraciones</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;