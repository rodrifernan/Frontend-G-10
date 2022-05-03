import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <li>
      <div className=" isesion ">
        <Link to="/registro">
          <div className=" registrarse btn text-white ">
            <i className="fas fa-user"></i>
            <span> Registrarse/Iniciar secion</span>
          </div>
        </Link>
      </div>
    </li>
  );
};
export default Register;
