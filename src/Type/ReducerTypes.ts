import { ProductInterface } from "../Interface/ProductInterface";
import { ProductoCarrito } from "./ProductoCarrito";


type AddProductAction = {
    type: "ADD_PRODUCT";
    payload: ProductoCarrito | ProductInterface;
};

type DiscountProductAction = {
    type: "REMOVE_PRODUCT" | "DISCOUNT_PRODUCT";
    payload: {
        id: number;
    };
};

type CleanAction = {
    type: "CLEAN";
};

export type CarritoAction =
    | AddProductAction
    | DiscountProductAction
    | CleanAction;
