import { FilterInterface } from "../Interface/FilterInterface"
import { ProductInterface } from "../Interface/ProductInterface"

export type FilterHookReturnType = {
    setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>,
     Filtro: (product: Array<ProductInterface>)=> Array<ProductInterface>, 
     filter: FilterInterface
  }