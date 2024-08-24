import "./App.css";
import Header from "./components/Header/Header";
import productsJson from "./Productos.json";
import { useContext } from "react";
import { filterProvider } from "./context/FilterContext";
import CarritoProvider from "./context/CaritoContext";
import ListProducts from "./components/ListProducts/ListProducts";
import Carrito from "./components/Carrito/Carrito";
import { ProductInterface } from "./Interface/ProductInterface";

function App() {
  const context = useContext(filterProvider);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  return (
    <>
      <Header></Header>
      <CarritoProvider>
        <Carrito></Carrito>
        <ListProducts
          productos={context.Filtro(productsJson as Array<ProductInterface>)}
        ></ListProducts>
      </CarritoProvider>
    </>
  );
}

export default App;
