<<<<<<< Updated upstream
import React from "react";
import Form from "../Form/Form";
import store from "./img/store.png";
import HeaderHome from "./../Headers/HeaderHome";
import { Route, Switch } from "react-router-dom";
=======
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
>>>>>>> Stashed changes

const Home = () => {
  return (
    <>
<<<<<<< Updated upstream
      <HeaderHome />
      <div className="col-12 content">
        <div className="col-6">
          <Form />
        </div>
        <div className="col-6">
          <img src={store} alt="store" />
=======
      <div className="col-12 d-flex mt-4 ">
        <div className="col-6 "></div>
        <div className="col-6 filtrado d-flex justify-content-end">
          <div className="col-6">
            <select
              class="form-select form-select-lg mb-1"
              aria-label=".form-select-lg example"
              onChange={handleOnChange}
            >
              <option value={"All"} defaultValue>
                Categoria
              </option>
              {Array.isArray(categories) ? (
                categories.map((cat, i) => {
                  return (
                    <option key={cat.id} value={cat.name}>
                      {" "}
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
        <div className="row col-12">
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
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
};

export default Home;
