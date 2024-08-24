import { useReducer } from "react";
import { ReducerCart } from "../Reducer/ReducerCart";
import { CarritoHookReturnType } from "../Type/CarritoHookReturnType";
import { ProductoCarrito } from "../Type/ProductoCarrito";
import { ProductInterface } from "../Interface/ProductInterface";


export default function useCarrito() : CarritoHookReturnType {
    const initial: Array<ProductoCarrito> = JSON.parse(window.localStorage.getItem('cart') ||  "[]");
    const [carrito, dispatch] = useReducer(ReducerCart, initial);

    function AddProduct(producto: ProductoCarrito | ProductInterface) {
      dispatch({ type: "ADD_PRODUCT", payload: producto });
    }
  
    function ClearCart() {
      dispatch({ type: "CLEAN" });
    }
   
    function RemuveProductCart(producto: ProductoCarrito | ProductInterface) {
      dispatch({ type: "REMOVE_PRODUCT", payload: producto });
    }

    function DiscountProduct(producto: ProductoCarrito) {
      dispatch({ type: "DISCOUNT_PRODUCT", payload: producto });
    }

    return {carrito, AddProduct, ClearCart, RemuveProductCart, DiscountProduct};
}
