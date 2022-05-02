import React from "react";
import { myKart } from "../../redux/reducer/carrito";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { emptycarrito } from "../../redux/reducer/carrito";
import { useDispatch } from "react-redux";
import "./Carrito.css";
const Carrito = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const carrito = useSelector(myKart);
  console.log(carrito);
  let getData = localStorage.getItem("carrito");
  console.log(getData);
  let Parse = JSON.parse(getData);
  console.log(Parse);
  var total = Array.isArray(Parse)
    ? Parse.reduce(
        (sum, value) =>
          typeof value.price == "number" ? sum + value.price : sum,
        0
      )
    : "-";
  var length = Array.isArray(Parse) ? Parse.length : 0;
  const handleOnElminarAll = (e) => {
    dispatch(emptycarrito());
    localStorage.clear();
  };
  return (
    <div>
      <div className="bg-light mt-3 mx-3">
        <h4 className="py-3 px-3">Carro de compra</h4>
        <p className="border-bottom text-right py-1 mx-3">Precio</p>
        {Array.isArray(Parse) ? (
          Parse.map((pr) => {
            return (
              <div className=" border-bottom d-flex mx-3 py-3 ">
                <div className="px-3">
                  <img
                    className=" img-thumbnail"
                    src={pr.image}
                    alt={pr.title}
                    width={200}
                  />
                </div>
                <div className="d-flex  justify-content-beetwen w-100">
                  <div className="col-6">
                    <p>{pr.title}</p>
                    <p className="pt-1">
                      {pr.stock > 0
                        ? "Unidades en stock!"
                        : "Sin disponibilidad"}
                    </p>
                    <button className="btn text-light btn-dark">
                      {" "}
                      Eliminar
                    </button>
                  </div>
                  <div className="col-6 text-right">
                    <p className="">${pr.price}</p>
                  </div>
                </div>
                <div></div>
              </div>
            );
          })
        ) : (
          <div className=" text-center">
            <h3>Su carro de compras está vacio. Agregue algunos productos!</h3>
          </div>
        )}
        <div className=" d-flex py-3 mx-3">
          <div className="col-6">
            <button
              onClick={handleOnElminarAll}
              className="btn text-light btn-warning"
              disabled={length === 0}
            >
              Eliminar todo
            </button>
          </div>
          <div className="col-6 text-right">
            Total({length} articulos) : ${total}
          </div>
        </div>
      </div>
      <div className="mt-2 d-flex">
        <div className="col-6">
          <button
            onClick={history.goBack}
            className="btn text-light btn-danger"
          >
            <i className="fas fa-arrow-left"></i> Regresar
          </button>
        </div>
        <div className="text-right col-6">
          <button
            className="btn text-light btn-success"
            disabled={length === 0}
          >
            <i class="far fa-credit-card pr-1"></i>Comprar!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carrito;
