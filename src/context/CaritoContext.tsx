import { createContext } from "react";
import useCarrito from "../Hooks/CarritoHook";

export const carritoContex = createContext<any>({});

export default function CarritoProvider({ children }: any) {
  const [carrito, AddProduct, ClearCart, RemuveProductCart] = useCarrito();

  return (
    <carritoContex.Provider
      value={{ carrito, AddProduct, ClearCart, RemuveProductCart }}
    >
      {children}
    </carritoContex.Provider>
  );
}
