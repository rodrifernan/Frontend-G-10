import React from "react";
import { useLogOut } from "./useLogOut";
import { Link } from "react-router-dom";

export const UserDropDown = () => {
  const out = useLogOut();

  return (
    <>
      {JSON.parse(localStorage.getItem("userCredentials")) ? (
        <div className="dropdown">
          <button
            className="btn dropdown-toggle registrarse btn text-white"
            style={{ backgroundColor: "black" }}
            type="button"
            id="dropdownMenuUser"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {JSON.parse(localStorage.getItem("userCredentials")).userName}
          </button>
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuUser">
            <li>
              <Link to="/perfil">
                <button className="dropdown-item">Ver Perfil</button>
              </Link>
            </li>
            <li>
              <button className="dropdown-item">Mis Pedidos</button>
            </li>
            <li>
              <button className="dropdown-item">Mis Reseñas</button>
            </li>
            <li>
              <button className="dropdown-item">Vender</button>
            </li>
            <div className="dropdown-divider"></div>
            <li>
              <button className="dropdown-item" onClick={out}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <p>notLogin</p>
      )}
    </>
  );
};
