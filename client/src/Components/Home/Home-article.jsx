import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  getAllProducts,
  getByCategories,
  order,
  inversa,
  precioOrder,
  precioInvers,
} from "../../redux/reducer/products";
import {
  getAllCategories,
  categoriesAll,
} from "../../redux/reducer/getCategorie";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Cards";

const Home = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  const handleOnChange = (e) => {
    dispatch(getByCategories(e.target.value));
    if (e.target.value === "All") {
      dispatch(fetchProducts());
    }
    setCategory(e.target.value);
  };
  let categories = useSelector(categoriesAll);

  let products = useSelector(getAllProducts);

  const handleOnChangeOrder = (e) => {
    if (e.target.value === "sinalterar") {
      dispatch(fetchProducts());
    } else if (e.target.value === "AaZ") {
      console.log(e.target.value);
      dispatch(order());
      console.log(products);
    } else if (e.target.value === "ZaA") {
      dispatch(inversa());
    } else if (e.target.value === "lowPrice") {
      dispatch(precioOrder());
    } else {
      dispatch(precioInvers());
    }
  };
  console.log(products);
  if (products.length === 0) {
    products = "No hay resultados que mostrar";
  }
  return (
    <>
      <div className="col-12 d-flex mt-4 ">
        <div className="col-6 "></div>
        <div className="col-6 filtrado d-flex justify-content-end">
          <div className="col-6">
            <select
              class="form-select form-select-lg mb-1"
              aria-label=".form-select-lg example"
              onChange={handleOnChange}
            >
              <option value={"All"} selected>
                Categoria
              </option>
              {Array.isArray(categories) ? (
                categories.map((cat, i) => {
                  return <option value={cat.name}> {cat.name}</option>;
                })
              ) : (
                <div>{categories}</div>
              )}
            </select>
          </div>
          <div className="col-6 mr-2">
            <select
              class="form-select form-select-lg mb-1"
              aria-label=".form-select-lg example"
              onChange={handleOnChangeOrder}
            >
              <option value={"sinalterar"} selected>
                Ordenamiento
              </option>
              <option value={"AaZ"}>Alfabeticamente de A-Z</option>
              <option value={"ZaA"}>Inversamente de Z-A</option>
              <option value={"lowPrice"}>Precio: menor a mayor</option>
              <option value={"Highrice"}>Precio: mayor a menor</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-12 justify-content-center  d-flex py-3">
        <div className="row col-12 text-center">
          {Array.isArray(products) ? (
            products.map((pr) => {
              return (
                <Card
                  description={pr.description}
                  name={pr.name}
                  image={pr.image}
                  price={pr.price}
                />
              );
            })
          ) : (
            <div className="text-light text-center">
              <h3>{products}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
