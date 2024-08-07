import { createContext } from "react";
import useFilter from "../Hooks/Filter";

export const filterProvider = createContext<any>({});

export default function FilterContext({ children }: any) {
  const [setFilter, Filtro, filter] = useFilter();

  return (
    <filterProvider.Provider value={{ setFilter, Filtro, filter }}>
      {children}
    </filterProvider.Provider>
  );
}
