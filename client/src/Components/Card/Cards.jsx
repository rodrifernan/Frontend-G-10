import React from "react";
import { Link } from "react-router-dom";

const Card = ({ description, name, price, image }) => {
  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img-top" src={image[0]} alt="foto" />
        <div className="card-body">
          <Link to={`/detail/${name}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <p className="card-text">{description}</p>
          <p className="card-text">Precio: ${price}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
