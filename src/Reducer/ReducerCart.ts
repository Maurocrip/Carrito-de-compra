import { ProductoCarrito } from "../Interface/ProductoCarritoInterface";

function updateLocalStorage(state : Array<ProductoCarrito>){
    window.localStorage.setItem("cart",JSON.stringify(state))
}

export function ReducerCart(state: Array<ProductoCarrito>, action: any)
{
    let product: any = action.payLoad;
    let retorno: any = state

    switch (action.type) {
        case "ADD_PRODUCT":
  
            let indexProduct: number = state.findIndex(
                (element) => element.id == product.id
            );
            let carritoComodin: Array<ProductoCarrito> = [...state];
            if (indexProduct >= 0) {
                carritoComodin[indexProduct].cantity += 1;
            } else {
                carritoComodin.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
                cantity: 1,
                });
            }

            retorno = carritoComodin;
            break;
        case "REMOVE_PRODUCT":
            retorno = state.filter((productoArray) => productoArray.id != product.id);
            break;

        case "CLEAN":
            retorno = [];
            break;
      }
    updateLocalStorage(retorno);
    return retorno;
}