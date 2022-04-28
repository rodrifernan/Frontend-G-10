import React from "react";

const Enlaces = () => {
  return (
    <div className="enlaces col-4 text-center ">
      <ul className="nav">
        <li className="nav-item">
          <a className=" btn  text-white nav-link" href="#">
            <i class="fas fa-fire"></i>
            Los mas Vendidos
          </a>
        </li>

        <li className="nav-item">
          <a className="btn text-white nav-link" href="#">
            <i class="fas fa-shopping-bag"></i>
            Mis compras
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link btn text-white" href="#">
            <i class="fas fa-shopping-cart "></i>
            Mi carrito
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Enlaces;
