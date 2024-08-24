import { createContext } from "react";
import useFilter from "../Hooks/Filter";
import { FilterHookReturnType } from "../Type/FilterHookReturnType";
import { Props } from "../Type/PropsChildren";

export const filterProvider = createContext<undefined | FilterHookReturnType>(undefined);

export default function FilterContext({ children }: Props) {
  const { setFilter, Filtro, filter } = useFilter();

  return (
    <filterProvider.Provider value={{ setFilter, Filtro, filter }}>
      {children}
    </filterProvider.Provider>
  );
}
