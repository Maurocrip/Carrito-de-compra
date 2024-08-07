import { useContext } from "react";
import "./Products.css";
import { carritoContex } from "../context/CaritoContext";

function Products({ productos }: any) {
  let { carrito, AddProduct, RemuveProductCart } = useContext(carritoContex);

  function CheckProdct(product: any): boolean {
    let retorno = carrito.some((elem: any) => elem.id == product.id);
    return retorno;
  }

  return (
    <main className="producto">
      <ul>
        {productos.map((producto: any) => {
          const checkProduct: boolean = CheckProdct(producto);
          return (
            <li key={producto.id}>
              <div>
                <h3>{producto.title}</h3>
              </div>
              <div>
                <img src={producto.image} alt={producto.description} />
                <label>{producto.price}$</label>
              </div>
              <div>
                <button
                  style={
                    checkProduct
                      ? { borderColor: "red" }
                      : { borderColor: "green" }
                  }
                  onClick={() =>
                    checkProduct
                      ? RemuveProductCart(producto)
                      : AddProduct(producto)
                  }
                >
                  {checkProduct ? "Quitar" : "Agregar"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;

/*
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
   */

//https://api.escuelajs.co/api/v1/products
