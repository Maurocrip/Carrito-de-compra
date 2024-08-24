import { useContext, useId } from "react";
import "./Carrito.css";
import { carritoContex } from "../../context/CaritoContext";
import { CarritoHookReturnType } from "../../Type/CarritoHookReturnType";
import ProductCarrito from "../ProductCarrito/ProductCarrito";

export default function Carrito() {
  const context = useContext(carritoContex);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  let menuId = useId();

  function OnClickEvente() {
    (context as CarritoHookReturnType).ClearCart();
  }
  return (
    <>
      <label className="cart-button" htmlFor={menuId}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 0v4H8l4 4l4-4h-2V0M1 2v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
          />
        </svg>
      </label>
      <input type="checkbox" hidden id={menuId} />

      <div className="cart">
        <header>
          <h3>Carrito</h3>
        </header>
        <main>
          {context.carrito.length == 0 ? (
            <label>Agrega productos al carrito</label>
          ) : (
            <>
              <ul>
                {context.carrito.map((producto) => {
                  return <ProductCarrito key={producto.id}>{producto}</ProductCarrito>;
                })}
              </ul>
              <div className="boton-cart">
                <button style={{ marginBottom: "33px" }} onClick={OnClickEvente}>
                  Clear
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
