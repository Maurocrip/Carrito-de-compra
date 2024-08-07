import "./App.css";
import Header from "./components/Header";
import productsJson from "./Productos.json";
import Products from "./components/Products";
import { useContext } from "react";
import { filterProvider } from "./context/FilterContext";
import Carrito from "./components/Carrito";
import CarritoProvider from "./context/CaritoContext";

function App() {
  const provider = useContext(filterProvider);

  return (
    <>
      <Header></Header>
      <CarritoProvider>
        <Carrito></Carrito>
        <Products productos={provider.Filtro(productsJson)}></Products>
      </CarritoProvider>
    </>
  );
}

export default App;
