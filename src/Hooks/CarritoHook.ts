import { useReducer } from "react";
import { ReducerCart } from "../Reducer/ReducerCart";


export default function useCarrito() {
    const initial: any = JSON.parse(window.localStorage.getItem('cart') ||  "[]") 
    const [carrito, dispatch] = useReducer(ReducerCart, initial);

    function AddProduct(producto: any) {
      dispatch({ type: "ADD_PRODUCT", payLoad: producto });
    }
  
    function ClearCart() {
      dispatch({ type: "CLEAN" });
    }
  
    function RemuveProductCart(producto: any) {
      dispatch({ type: "REMOVE_PRODUCT", payLoad: producto });
    }

    return [carrito, AddProduct, ClearCart, RemuveProductCart];
}
