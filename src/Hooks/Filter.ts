import { useState } from "react";

 export default function useFilter() {
    const [filter, setFilter] = useState<any>({
      minPrice: 0.0,
      category: "all",
    });
  
    function Filtro(product: any): Array<any> {
      let a = product.filter((producto: any) => {
        return (
          producto.price >= filter.minPrice &&
          (filter.category == "all" || filter.category == producto.category)
        );
      });
      return a;
    }
  
    return [setFilter, Filtro, filter];
  }