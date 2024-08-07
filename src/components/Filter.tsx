import { useContext, useId } from "react";
import { filterProvider } from "../context/FilterContext";
import "./Filtro.css";

export default function Filter() {
  const { setFilter, filter } = useContext(filterProvider);
  const idPrice = useId();
  const idCategory = useId();

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let minPrice: number = parseInt(e.target.value);
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      minPrice: minPrice,
    }));
  }

  function HandleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      category: e.target.value,
    }));
  }

  return (
    <>
      <div className="filtro">
        <div>
          <label htmlFor={idPrice}>Precio minimo</label>
          <input
            type="range"
            id={idPrice}
            min={0}
            value={filter.minPrice}
            max={1000}
            onChange={HandleChange}
          />
          <small>{filter.minPrice}</small>
        </div>
        <div>
          <label htmlFor={idCategory}>Categoria</label>
          <select onChange={HandleChangeCategory} id={idCategory}>
            <option value="all">todos</option>
            <option value="women's clothing">Ropa de mujer</option>
            <option value="electronics">Electrodomesticos</option>
            <option value="jewelery">Joyeria</option>
            <option value="men's clothing">Ropa de hombre</option>
          </select>
        </div>
      </div>
    </>
  );
}
