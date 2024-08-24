import { ProductInterface } from "../Interface/ProductInterface"
import { ProductoCarrito } from "./ProductoCarrito"


export type CarritoHookReturnType = {
    carrito: Array<ProductoCarrito>, 
    AddProduct: (producto: ProductoCarrito | ProductInterface)=> void , 
    ClearCart: ()=> void, 
    RemuveProductCart: (producto: ProductoCarrito | ProductInterface)=> void,
    DiscountProduct:  (producto: ProductoCarrito)=> void
  }