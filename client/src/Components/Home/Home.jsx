import React from "react";
import Form from "../Form/Form";
import store from "./img/store.png";
import HeaderHome from "./../Headers/HeaderHome";
import { Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className="col-12 content">
        <div className="col-6">
          <Form />
        </div>
        <div className="col-6">
          <img src={store} alt="store" />
        </div>
      </div>
    </>
  );
};

export default Home;
