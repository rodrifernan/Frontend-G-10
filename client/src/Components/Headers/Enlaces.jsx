import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Enlaces = () => {
  return (
    <div className="enlaces col text-center ">
      <ul className="nav">
        <li>
          <div className=" isesion ">
            <Link to="/registro">
              <div className=" registrarse btn text-white ">
                <i className="fas fa-user"></i>
                <span> Sing In</span>
              </div>
            </Link>
          </div>
        </li>
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
        <li className="nav-item">
          <a className="nav-link btn text-white" href="/carrito">
            <i className="fas fa-shopping-cart "></i>
            <span> Cart</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Enlaces;
