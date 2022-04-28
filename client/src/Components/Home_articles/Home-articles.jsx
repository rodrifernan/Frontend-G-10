import HeaderInv from "../Headers/HeaderInv";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getAllCategories,
  allCategories,
} from "../../redux/reducer/categoriesSlice";
import { Route, Switch } from "react-router-dom";
import { getAllProducts, fetchProducts } from "./../../redux/reducer/products";
import Cards from "../Cards-Article/Cards-Article";
const HomeArticles = () => {
  //const categories = useSelector(allCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //console.log(categories);
  const products = useSelector(getAllProducts);
  console.log(products);
  return (
    <>
      <HeaderInv />
      <h1 className="text-center text-light pt-4">ULTIMOS AÑADIDOS</h1>
      <div className="  d-flex flex-wrap p-5">
        {Array.isArray(products) ? (
          products.map((pr, i) => {
            return (
              <Cards
                name={pr.name}
                description={pr.description}
                price={pr.price}
                image={pr.image}
              />
            );
          })
        ) : (
          <div>{products}</div>
        )}
      </div>
    </>
  );
};
export default HomeArticles;
