import React, { useEffect } from "react";
import {
  fetchProducts,
  getAllProducts,
  getByCategories,
  sortByName,
  sortByNameInversa,
  sortByPrice,
  sortByPriceInversa,
} from "../../redux/reducer/products";
import {
  getAllCategories,
  categoriesAll,
} from "../../redux/reducer/getCategorie";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Cards";
import { myKart } from "../../redux/reducer/carrito";
import Banner from "../Banner/Banner";

const Home = () => {
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
  };
  let categories = useSelector(categoriesAll);

  let products = useSelector(getAllProducts);

  const handleOnChangeOrder = (e) => {
    if (e.target.value === "sinalterar") {
      dispatch(fetchProducts());
    } else if (e.target.value === "AaZ") {
      console.log(e.target.value);
      dispatch(sortByName());
      console.log(products);
    } else if (e.target.value === "ZaA") {
      dispatch(sortByNameInversa());
    } else if (e.target.value === "lowPrice") {
      dispatch(sortByPrice());
    } else {
      dispatch(sortByPriceInversa());
    }
  };
  console.log(products);
  if (products.length === 0) {
    products = "No hay resultados que mostrar";
  }
  let carrito = useSelector(myKart);
  let saveData = localStorage.setItem("carrito", JSON.stringify(carrito));
  return (
    <>
    <Banner />
      <div className="col-12 d-flex mt-4  ">
        <div className="col-6 "></div>
        <div className="col-6 filtrado d-flex justify-content-end">
          <div className="col-6">
            <select
              className="form-select form-select-lg mb-1"
              aria-label=".form-select-lg example"
              onChange={handleOnChange}
            >
              <option value={"All"} defaultValue>
                Todos
              </option>
              {Array.isArray(categories) ? (
                categories.map((cat, i) => {
                  return (
                    <option key={i} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })
              ) : (
                <div>{categories}</div>
              )}
            </select>
          </div>
          <div className="col-6 mr-2">
            <select
              className="form-select form-select-lg mb-1"
              aria-label=".form-select-lg example"
              onChange={handleOnChangeOrder}
            >
              <option value={"sinalterar"} defaultValue>
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
      <div className="justify-content-center  d-flex flex-wrap">
        <div className=" text-center d-flex flex-wrap justify-content-center gap-2 p-5">
          {Array.isArray(products) ? (
            products.map((pr) => {
              return (
                <Card
                  key={pr.id}
                  description={pr.description}
                  name={pr.name}
                  image={pr.image}
                  price={pr.price}
                  id={pr.id}
                  color={pr.color}
                  brand={pr.brand}
                  stock={pr.stock}
                  warranty={pr.warranty}
                  category={pr.category}
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
