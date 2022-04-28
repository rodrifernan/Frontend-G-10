import React from "react";

const Cards = ({ description, name, price, image }) => {
  const foto = require(`../img/${image}`).default;

  return (
    <div className=" col-3">
      <div className="card">
        <img class="card-img-top" src={foto}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>

        <div className="card-body">
          <p className="card-text">Precio: ${price}</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
