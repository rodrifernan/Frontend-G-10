import React from "react";

const Enlaces = () => {
  return (
    <div className="enlaces col-4 text-center ">
      <ul className="nav">
<<<<<<< Updated upstream
        <li className="nav-item">
          <a className=" btn nav-link" href="#">
            <i class="fas fa-fire"></i>
=======
        <li>
          <div className=" isesion ">
            <a className=" registrarse btn text-white " href="/registro">
              <i class="fas fa-user"></i>
              Ingresar/Registrarse
            </a>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className=" btn  text-white nav-link" href="https://picsum.photos/300">
            <i className="fas fa-fire"></i>
>>>>>>> Stashed changes
            Los mas Vendidos
          </a>
        </li>

        <li className="nav-item">
          <a className="btn nav-link" href="#">
            <i class="fas fa-shopping-bag"></i>
            Mis compras
          </a>
<<<<<<< Updated upstream
        </li>
        <li class="nav-item">
          <a className="nav-link btn text-white" href="#">
            <i class="fas fa-shopping-cart "></i>
=======
        </li> */}
        <li className="nav-item">
          <a
            className="nav-link btn text-white"
            href="https://picsum.photos/300"
          >
            <i className="fas fa-shopping-cart "></i>
>>>>>>> Stashed changes
            Mi carrito
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Enlaces;
