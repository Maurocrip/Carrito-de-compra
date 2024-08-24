import { useContext } from "react";
import { carritoContex } from "../../context/CaritoContext";
import { ProductInterface } from "../../Interface/ProductInterface";
type Props = { producto: ProductInterface; checkProduct: boolean };

export default function Product({ producto, checkProduct }: Props) {
  const context = useContext(carritoContex);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }

  return (
    <li>
      <div>
        <h3>{producto.title}</h3>
      </div>
      <div>
        <img src={producto.image} alt={producto.description} />
        <label>{producto.price}$</label>
      </div>
      <div>
        <button
          style={checkProduct ? { borderColor: "red" } : { borderColor: "green" }}
          onClick={() =>
            checkProduct ? context.RemuveProductCart(producto) : context.AddProduct(producto)
          }
        >
          {checkProduct ? "Quitar" : "Agregar"}
        </button>
      </div>
    </li>
  );
}
