import { useContext } from "react";
import { carritoContex } from "../../context/CaritoContext";
import { ProductoCarrito } from "../../Type/ProductoCarrito";

type Props = {
  children: ProductoCarrito;
};
export default function ProductCarrito({ children }: Props) {
  const context = useContext(carritoContex);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }

  return (
    <li>
      <div>
        <h5 style={{ margin: "1px" }}>{children.title}</h5>
      </div>
      <div className="producto-Carrito">
        <img src={children.image} alt="producto" />
        <label>Cantidad {children.cantity}</label>
        <strong>{children.price}$</strong>
      </div>
      <div className="boton-add-cart">
        <button style={{ margin: "0px 5px" }} onClick={() => context.AddProduct(children)}>
          +
        </button>
        <button style={{ margin: "0px 5px" }} onClick={() => context.DiscountProduct(children)}>
          -
        </button>
      </div>
    </li>
  );
}
