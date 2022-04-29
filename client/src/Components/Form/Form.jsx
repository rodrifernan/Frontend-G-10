import { React, useState } from "react";
import Logo from "../Home/img/faviconBag.png";
import "./Form.css";

import { userPost } from "../../redux/reducer/userPost";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    userName: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    roleId: "1",
    idPersonal: "",
  });
  const handleOnchangeActivity = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(userPost(form));
    alert("Usuario Creado Satisfactoriamente");
    setForm({
      userName: "",
      password: "",
      passwordConfirmation: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      roleId: "1",
      idPersonal: "",
    });
    // history.push('/home')
  };

 
  return (
    <div>
      <div className="text-center">
        <img className="icono" src={Logo} alt='logo'/>
      </div>
      <div className="container w-50 my-2">
        <form onSubmit={handleOnSubmit}>
          <div className="text-center py-3 title-form">
            <h1 className="text-white">Formulario de Registro </h1>

            <h4 className="text-white  pt-3">
              Sus futuros productos los espera en ShopBag
            </h4>
          </div>
          <div className="mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="email">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type={"email"}
                name={"email"}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="email"
                placeholder="Correo electronico"
                onChange={handleOnchangeActivity}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="pass">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name={"password"}
                className="form-control"
                aria-describedby="pass"
                id="exampleInputPassword1"
                onChange={handleOnchangeActivity}
                placeholder="Contraseña"
              />
            </div>
            <div className="input-group pt-4 flex-nowrap">
              <span className="input-group-text" id="pass">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name={"passwordConfirmation"}
                className="form-control"
                aria-describedby="pass"
                id="exampleInputPassword1"
                onChange={handleOnchangeActivity}
                placeholder="Confirmar contraseña"
              />
            </div>
          </div>
          <div className="mb-4 ">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="user">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name={"userName"}
                className="form-control"
                placeholder="Nombre de usuario"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
          </div>
          <div className="mb-4 d-flex">
            <div className="input-group flex-nowrap col-6">
              <span className="input-group-text" id="user">
                <i className="fas fa-user-circle"></i>
              </span>
              <input
                type="text"
                name={"firstName"}
                className="form-control"
                placeholder="Nombre"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="input-group flex-nowrap col-6">
              <span className="input-group-text" id="user">
                <i className="fas fa-user-circle"></i>
              </span>
              <input
                type="text"
                name={"lastName"}
                className="form-control"
                placeholder="Apellido"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
          </div>
          <div className="mb-4 d-flex">
            <div className="input-group flex-nowrap col-4">
              <span className="input-group-text" id="user">
                <i className="fas fa-address-book"></i>
              </span>
              <input
                type="text"
                name={"address"}
                className="form-control"
                placeholder="Direccion"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="input-group flex-nowrap col-4">
              <span className="input-group-text" id="user">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="number"
                name={"phone"}
                className="phone"
                placeholder="Celular"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="input-group flex-nowrap col-4">
              <span className="input-group-text" id="user">
                <i className="fas fa-address-card"></i>
              </span>
              <input
                type="number"
                name={"idPersonal"}
                className="form-control"
                placeholder="ID personal"
                aria-describedby="user"
                id="Nickname"
                onChange={handleOnchangeActivity}
              />
            </div>
          </div>
          <div className="pb-3 ">
            <button type="submit" className="btn btn-primary col-12">
              Registrarse
            </button>
          </div>
          <div className="text-center">
            <ul className="btn nav justify-content-center">
              <li className="btn nav-item col-6">
                <a
                  className=" btn bg-warning text-light"
                  href="/memebership-form"
                >
                  <i className="fab fa-google text-danger pr-2"></i>Ingresar con
                  Google
                </a>
              </li>
              <li className="btn nav-item col-6">
                <a className=" btn bg-dark text-light" href="/memebership-form">
                  <i className="fab fa-github text-light pr-2"></i>
                  Ingresar con GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center pb-3">
            <a href="/iniciar-sesion" className="text-decoration-none">
              ¿Ya tienes una cuenta? Haz click Aqui!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
