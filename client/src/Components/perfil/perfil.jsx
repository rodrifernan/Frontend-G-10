import React, { useEffect, useState } from "react";
import { UpdatePerfil } from "../../redux/reducer/perfil";
import { useSelector, useDispatch } from "react-redux";
import { getPerfil, getAllInfo } from "../../redux/reducer/perfil";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Perfil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getData = localStorage.getItem("userCredentials");
  let myPerfil = useSelector(getAllInfo);
  let parseGetData = JSON.parse(getData);
  const [editar, setEditar] = useState(false);

  const [form, setForm] = useState({
    userName: "",
    email: "",
    address: "",
    phone: "",
    firstName: "",
    lastName: "",
  });
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getPerfil(parseGetData.token));
  }, [dispatch]);

  const handleEdit = () => {
    setEditar(true);
    console.log(editar);
  };
  const handleAccept = () => {
    if (form.userName === "") {
      form.userName = myPerfil.userName;
    }
    if (form.email === "") {
      form.email = myPerfil.email;
    }
    if (form.address === "") {
      form.address = myPerfil.address;
    }
    if (form.phone === "") {
      form.phone = myPerfil.phone;
    }
    form.firstName = myPerfil.firstName;
    form.lastName = myPerfil.lastName;
    console.log(form);
    dispatch(UpdatePerfil(form));
    swal({
      title: "Los cambios han sido efectuados!",
      icon: "success",
      button: "Aceptar",
    });
    setEditar(false);
    setForm({
      userName: "",
      email: "",
      address: "",
      phone: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <div className="bg-light my-3">
        <div className="container">
          <div className="d-flex border-bottom col-12 align-items-center">
            <div className="col-6 text-left">
              <h4 className="py-3 ">Perfil de {myPerfil.userName}</h4>
            </div>
            <div className="col-6 text-right">
              <button
                className=" btn btn-primary"
                onClick={handleEdit}
                disabled={editar}
              >
                <i className="fas fa-edit"></i>Editar datos
              </button>
            </div>
          </div>
          {editar === false ? (
            <div>
              <div className="mx-3 row">
                <div className="my-3">
                  <h6>Nombre de usuario: {myPerfil.userName}</h6>
                </div>
              </div>
              <div className="mx-3 row">
                <div className="my-3">
                  <h6>Correo electronico: {myPerfil.email}</h6>
                </div>
              </div>
              <div className="mx-3 row">
                <div className="my-3">
                  <h6>Telefono : {myPerfil.phone}</h6>
                </div>
              </div>
              <div className="mx-3 row">
                <div className="my-3">
                  <h6>Direccion: {myPerfil.address}</h6>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleAccept} className="mt-2 mx-4 row g-3">
              <p>Deja en blanco aquello que quieres mantener</p>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Nombre de usuario
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name={"userName"}
                    value={form.userName}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Correo Electronico
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword"
                    name={"email"}
                    value={form.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Direccion
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name={"address"}
                    value={form.address}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Nº de Telefono
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name={"phone"}
                    value={form.phone}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className=" my-3 col-12 text-center">
                <button
                  type="submit"
                  className=" col-2 btn btn-success text-light"
                >
                  Aceptar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="col-6 mb-3">
        <button
          onClick={() => navigate(-1)}
          className="btn text-light btn-danger"
        >
          <i className="fas fa-arrow-left"></i> Regresar
        </button>
      </div>
    </div>
  );
};

export default Perfil;
