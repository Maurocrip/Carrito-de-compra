import { useState } from "react";
import { FilterInterface } from "../Interface/FilterInterface";
import { ProductInterface } from "../Interface/ProductInterface";
import { FilterHookReturnType } from "../Type/FilterHookReturnType";

 export default function useFilter() : FilterHookReturnType 
 {
    const [filter, setFilter] = useState<FilterInterface>({ minPrice: 0.0, category: "all"});
  
    function Filtro(product: Array<ProductInterface>): Array<ProductInterface> 
    {
      let listaFiltrada = product.filter((producto: ProductInterface) => {
        return (
          producto.price >= filter.minPrice &&
          (filter.category == "all" || filter.category == producto.category)
        );
      });
      return listaFiltrada;
    }
   
    return {setFilter, Filtro, filter};
  }