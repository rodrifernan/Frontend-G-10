import React from "react";
import { useLogOut } from "./useLogOut";

//No agregar Link, no permite que se visualice los items del dropdown
export const UserDropDown = () => {
  const out = useLogOut();

  return (
    <>
      {JSON.parse(localStorage.getItem("userCredentials")) ? (
        <div className="dropdown menuDrop d-flex justify-content-start">
          <button
            className="btn dropdown-toggle registrarse btn text-white"
            style={{ backgroundColor: "black", width: "fit-content" }}
            type="button"
            id="dropdownMenuUser"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user text-light iconUser  "></i>

            <span className="userName">
              {JSON.parse(localStorage.getItem("userCredentials")).userName}
            </span>
          </button>
          <div
            className="dropdown-menu col-12"
            aria-labelledby="dropdownMenuUser"
          >
            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/perfil";
              }}
            >
              <p>Ver Perfil</p>
            </button>

            <button className="dropdown-item">Mis Pedidos</button>

            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/myWishes";
              }}
            >
              Mi lista de deseos
            </button>

            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/reseñas";
              }}
            >
              Mis Reseñas
            </button>

            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/userInvoices";
              }}
            >
              Facturas
            </button>

            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/userSales";
              }}
            >
              Ventas
            </button>

            <button
              className="dropdown-item"
              onClick={() => {
                window.location.href = "/create";
              }}
            >
              Vender
            </button>

            <div className="dropdown-divider"></div>

            <button className="dropdown-item" onClick={out}>
              Cerrar sesión
            </button>
          </div>
        </div>
      ) : (
        <p>notLogin</p>
      )}
    </>
  );
};
