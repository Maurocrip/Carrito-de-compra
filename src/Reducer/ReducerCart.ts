
import { ProductoCarrito } from "../Type/ProductoCarrito";
import { CarritoAction } from "../Type/ReducerTypes";

function updateLocalStorage(state : Array<ProductoCarrito>){
    window.localStorage.setItem("cart",JSON.stringify(state))
}

export function ReducerCart(state: Array<ProductoCarrito>, action: CarritoAction)
{
    let carritoComodin: Array<ProductoCarrito> = [...state];

    switch (action.type) {
        case "ADD_PRODUCT":
            let product = action.payload;
            let indexProduct: number = state.findIndex(
                (element) => element.id == product.id
            );

            if (indexProduct >= 0) {
                carritoComodin[indexProduct].cantity += 1;
            } else {
                carritoComodin.push({
                    ...product,
                    cantity: 1,
                });
            }

        break;
        case "REMOVE_PRODUCT":
            carritoComodin = carritoComodin.filter((productoArray) => productoArray.id != action.payload.id);
            break;

        case "DISCOUNT_PRODUCT":
            let index: number = carritoComodin.findIndex(
                (element) => element.id == action.payload.id
            );
            if (index >= 0) {
                if(carritoComodin[index].cantity>1)
                {
                    carritoComodin[index].cantity -= 1;
                }
                else
                {
                    carritoComodin= carritoComodin.filter((productoArray) => productoArray.id != action.payload.id);
                }
            }
            break;

        case "CLEAN":
            carritoComodin = [];
            break;
      }
    updateLocalStorage(carritoComodin);
    return carritoComodin;
}