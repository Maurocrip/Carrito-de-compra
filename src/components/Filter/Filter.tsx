import { useContext, useId } from "react";
import { filterProvider } from "../../context/FilterContext";
import "./Filter.css";
import { CategoryProducts } from "../../Const/Category";

export default function Filter() {
  const context = useContext(filterProvider);
  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  let { setFilter } = context;
  const idPrice = useId();
  const idCategory = useId();

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let minPrice: number = parseInt(e.target.value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: minPrice,
    }));
  }

  function HandleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter((prevFilter) => ({
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
            value={context.filter.minPrice}
            max={1000}
            onChange={HandleChange}
          />
          <small>{context.filter.minPrice}</small>
        </div>
        <div>
          <label htmlFor={idCategory}>Categoria</label>
          <select onChange={HandleChangeCategory} id={idCategory}>
            {CategoryProducts.map((elemet, index) => {
              return (
                <option key={index} value={elemet.value}>
                  {elemet.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
