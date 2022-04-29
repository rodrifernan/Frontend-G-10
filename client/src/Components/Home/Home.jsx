import React, { useEffect } from "react";
import { fetchProducts, getAllProducts } from "../../redux/reducer/products";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Headers/Header";
import Card from "../Card/Cards";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  let products = useSelector(getAllProducts);
  if (products.length === 0) {
    products = "No hay resultados que coincidan";
  }
  return (
    <>
      <Header />

      <div className="col-12 d-flex py-5">
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
    </>
  );
};
export default Home;
