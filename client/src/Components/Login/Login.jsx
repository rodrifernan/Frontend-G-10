import { React, useState } from "react";
import Logo from "../Home/img/faviconBag.png";
import { Login, LoginAll, Logout } from "../../redux/reducer/Login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    userOrEmail: "",
    password: "",
  });
  const handleOnchangeActivity = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  let loginin = useSelector(LoginAll);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(Login(form));
    alert("Usuario Creado Satisfactoriamente");
    setForm({
      userOrEmail: "",
      password: "",
    });
    history.push("/sesion");
    // history.push('/home')
  };
  console.log(loginin);
  const LogOut = (e) => {
    dispatch(Logout());
  };
  return (
    <div>
      <div className="text-center">
        <img className="icono" src={Logo} alt="logo" />
      </div>
      <div className="container w-50 my-2">
        <form onSubmit={handleOnSubmit}>
          <div className="text-center py-3 title-form">
            <h1 className="text-black">Formulario de Registro </h1>

            <h4 className="text-black  pt-3">
              Sus futuros productos los espera en ShopBag
            </h4>
          </div>
          <div className="mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="email">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type={"text"}
                name={"userOrEmail"}
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
          </div>
          <button className="btn text-light bg-info col-12" type="submit">
            Iniciar sesion
          </button>
        </form>
        <button
          className="mt-3 btn text-white bg-danger col-12"
          type="submit"
          onClick={LogOut}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default LoginIn;
