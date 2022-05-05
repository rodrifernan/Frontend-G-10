import React, { useState, useEffect } from "react";
import "./Header.css";

import { LoginModal } from "../Login/LoginModal";
import { UserDropDown } from "../hooks/UserDropDown";

//hook que devuelve un state que comprueba si hay alguien logeado
import { useSelector } from "react-redux";

const Enlaces = () => {
  const [login, setLogin] = useState(true);
  const userCredentials = useSelector(({ login }) => login.userCredentials);

  useEffect(() => {
    if (userCredentials.userName || localStorage.getItem("userCredentials")) {
      setLogin(true);
    } else setLogin(false);
  }, [userCredentials]);

  return (
    <div className="enlaces col text-center ">
      <ul className="nav">
        <li>
          <div className=" isesion ">
            {login ? (
              <UserDropDown />
            ) : (
              <LoginModal buttonClass={"registrarse btn text-white"} />
            )}
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
            <span> Carrito</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Enlaces;
