import React from "react";
import axios from "axios";
import { myKart } from "../../redux/reducer/carrito";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { emptycarrito, eraseAProduct } from "../../redux/reducer/carrito";
import { useDispatch } from "react-redux";
import "./Carrito.css";

//import "./respose.css";
//import Mercado2 from "../Carrito/prueba";

import toast, { Toaster } from "react-hot-toast";
import {checkoutMP} from '../../redux/reducer/checkoutMP'
//import { get } from "@reduxjs/toolkit/node_modules/immer/dist/internal";


const Carrito = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carrito = useSelector(myKart);


  localStorage.setItem("carrito", JSON.stringify(carrito));
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
    toast.error("Carrito vaciado");
  };
  const handleOnEraseProduct = (title) => {
    console.log(title);
    dispatch(eraseAProduct(title));
    toast.error("Producto eliminado");
  };

  const userToken = JSON.parse(localStorage.getItem('userCredentials')).token
  

  const handleOnCheckMP = (e) => {
      console.log('ckequear mercado pago')
  }

  return (

    <>
          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-xl'>
              <div className='modal-content'>
                <div className='modal-body  p-0' style={{ height: '90vh' }}>
                  <iframe
                    src={`http://localhost:3001/api/checkout/${userToken}`}
                    style={{ width: '100%', height: '90vh' }}
                    title='mercadoPago'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>          

    <div className="carrito__container">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-light mt-3 mx-3">
        <h4 className="py-3 px-3">Carro de compra</h4>
        <p className="border-bottom text-right py-1 mx-3">Precio</p>
        {Array.isArray(Parse) ? (
          Parse.map((pr) => {
            
            return (
              <div key={pr.id} className=" border-bottom d-flex mx-3 py-3 ">
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
                    <button
                      className="btn text-light btn-dark"
                      onClick={() => handleOnEraseProduct(pr.title)}
                    >
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
            onClick={() => navigate(-1)}
            className="btn text-light btn-danger"
          >
            <i className="fas fa-arrow-left"></i> Regresar
          </button>
        </div>
        <div className="text-right col-6">
            <button onClick={() => handleOnCheckMP()} // chequear mercado pago
                    className="btn text-light btn-success" disabled={length === 0} 
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
            >       
                   <i className="far fa-credit-card pr-1"></i>Comprar
            </button>
        </div>
      </div>
    </div>
    </> 



  );
};

const getCheckoutMP = async () => {
		console.log('estoy accion getCheckoutMP->')
		await axios
			.get('http://localhost:3001/api/checkout')
			.catch((err) => {
			console.log(err);
		});
	}

  
export default Carrito;

