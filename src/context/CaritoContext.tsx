import { createContext } from "react";
import useCarrito from "../Hooks/CarritoHook";
import { CarritoHookReturnType } from "../Type/CarritoHookReturnType";
import { Props } from "../Type/PropsChildren";

export const carritoContex = createContext<undefined | CarritoHookReturnType>(undefined);

export default function CarritoProvider({ children }: Props) {
  const { carrito, AddProduct, ClearCart, RemuveProductCart, DiscountProduct } = useCarrito();

  return (
    <carritoContex.Provider
      value={{
        carrito,
        AddProduct,
        ClearCart,
        RemuveProductCart,
        DiscountProduct,
      }}
    >
      {children}
    </carritoContex.Provider>
  );
}
