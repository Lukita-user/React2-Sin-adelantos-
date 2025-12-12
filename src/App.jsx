import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda online!" />
    </div>
  );
}

export default App;
