import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPerfil, getAllInfo } from "../../redux/reducer/perfil";
import { useHistory } from "react-router-dom";

const Perfil = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getData = localStorage.getItem("userCredentials");

  let parseGetData = JSON.parse(getData);
  const [editar, setEditar] = useState(false);
  useEffect(() => {
    dispatch(getPerfil(parseGetData.token));
  }, [dispatch]);
  let myPerfil = useSelector(getAllInfo);
  console.log(myPerfil);
  console.log(editar);
  const handleEdit = () => {
    setEditar(true);
    console.log(editar);
  };
  const handleAccept = () => {
    setEditar(false);
  };
  console.log(parseGetData.token);
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
                <i class="fas fa-edit"></i>Editar datos
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
            <div>
              <div className="d-flex">
                <div className="">Nombre de usuario: </div>
                <input
                  type={"text"}
                  placeholder="Ingrese nuevo nombre de usuario"
                />
              </div>
              <div>
                <button
                  className="btn btn-success text-light"
                  onClick={handleAccept}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-6 mb-3">
        <button onClick={history.goBack} className="btn text-light btn-danger">
          <i className="fas fa-arrow-left"></i> Regresar
        </button>
      </div>
    </div>
  );
};

export default Perfil;
