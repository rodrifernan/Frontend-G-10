import React, { useEffect } from "react";
import { fetchProducts, getAllProducts } from "../../redux/reducer/products";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Cards";

const HomeAcrticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector(getAllProducts);
  console.log(products);
  return (
    <>
      <h1 className="text-center text-white pt-4">Ultimos añadidos</h1>
      <div className="col-12 d-flex py-5">
        {Array.isArray(products) ? (
          products.map((pr) => {
            return (
              <Card
              key={pr.id}
                description={pr.description}
                name={pr.name}
                image={pr.image}
                price={pr.price}
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
export default HomeAcrticles;
