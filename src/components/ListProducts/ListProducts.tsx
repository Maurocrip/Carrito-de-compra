import { useContext } from "react";
import "./ListProducts.css";
import { carritoContex } from "../../context/CaritoContext";
import { ProductInterface } from "../../Interface/ProductInterface";
import Product from "../Product/Product";

type Props = {
  productos: ProductInterface[];
};

function ListProducts({ productos }: Props) {
  const context = useContext(carritoContex);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  let { carrito } = context;

  function CheckProdct(product: ProductInterface): boolean {
    let retorno = carrito.some((elemet) => elemet.id == product.id);
    return retorno;
  }

  return (
    <main className="producto">
      <ul>
        {productos.map((producto) => {
          const checkProduct = CheckProdct(producto);
          return (
            <Product key={producto.id} producto={producto} checkProduct={checkProduct}></Product>
          );
        })}
      </ul>
    </main>
  );
}

export default ListProducts;
