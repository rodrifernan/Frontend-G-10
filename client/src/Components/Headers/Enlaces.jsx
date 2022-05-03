import React from "react";
import { Route } from "react-router-dom";
import buttonSession from "./wishButton";
import Register from "./Register-button";
import "./Header.css";
import { Link } from "react-router-dom";

const Enlaces = () => {
  return (
    <div className="enlaces col text-center ">
      <ul className="nav">
        <Route exact path="/home" component={Register}></Route>
        {/* <li className="nav-item">
          <a className=" btn  text-white nav-link" href="https://picsum.photos/300">
            <i className="fas fa-fire"></i>
            Los mas Vendidos
          </a>
        </li> */}

        {/* <li className="nav-item">
          <a className="btn text-white nav-link" href="https://picsum.photos/300">
            <i className="fas fa-shopping-bag"></i>
            Mis compras
          </a>
        </li> */}
        <Route path="/sesion" component={buttonSession}></Route>
        <li className="nav-item">
          <a className="nav-link btn text-white" href="/carrito">
            <i className="fas fa-shopping-cart "></i>
            <span>Mi Carrito</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Enlaces;
