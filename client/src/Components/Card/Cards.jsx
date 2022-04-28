import React from "react";

const Card = ({ description, name, price, image }) => {
  const foto = require(`../img/${image}`).default;
  console.log(foto);
  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img-top" src={foto} alt="foto" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Precio: ${price}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
