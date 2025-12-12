import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
<nav>
  <div className="logo">MiTienda</div>
  <div className="links">
    <a href="#inicio">Inicio</a>
    <a href="#productos">Productos</a>
    <a href="#contacto">Contacto</a>
  </div>
  <div className="cart-widget">
    <CartWidget />
  </div>
</nav>
  );
}

export default NavBar;
