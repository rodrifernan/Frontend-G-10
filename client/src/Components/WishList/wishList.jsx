import React, { useEffect } from "react";
import { getList, allWishes } from "./../../redux/reducer/getWishilist";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("userCredentials");
  function deleteWish(id) {
    console.log(parseToken.token);
    fetch(
      "http://localhost:3001/api/wishlist",
      { method: "delete" },
      { data: { id: id } },
      { headers: { "auth-token": parseToken.token } }
    );
  }
  const parseToken = JSON.parse(token);
  console.log(parseToken);
  useEffect(() => {
    dispatch(getList(parseToken.token));
  }, [dispatch]);
  let myWishes = useSelector(allWishes);
  const handlerDelete = (id) => {
    deleteWish(id);
  };
  return (
    <div>
      <div className="bg-light mt-3 mx-3">
        <h4 className="py-3 px-4">Mi lista de deseos</h4>
        <p className="border-bottom text-right py-1 mx-4">Precio</p>
        {Array.isArray(myWishes) ? (
          myWishes.map((wh) => {
            return (
              <div className="border-bottom d-flex mx-3 py-3">
                <div className="px-3">
                  <img
                    className="img-thumbnail"
                    src={wh.image[0]}
                    alt={wh.name}
                    width={200}
                  />
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div className="col-6">
                    <p>{wh.name}</p>
                    <p className="pt-1">
                      {" "}
                      {wh.stock > 0
                        ? "Unidades en Stock!"
                        : "Sin disponibilidad"}
                    </p>
                    <button
                      className="btn-text-light btn-dark"
                      onClick={() => handlerDelete(wh.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="col-6 text-right">
                    <p>${wh.price}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <h3>Su Lista de deseo esa vacio. Agregue algunos productos!</h3>
          </div>
        )}
      </div>
      <div className="my-2  d-flex">
        <div className="col-6">
          <button
            onClick={() => navigate(-1)}
            className="btn text-light btn-danger"
          >
            <i className="fas fa-arrow-left"></i> Regresar
          </button>
        </div>
        <div className="text-right col-6">
          <button
            className="btn text-light btn-success"
            disabled={myWishes.length === 0}
          >
            <i class="fas fa-shopping-cart"></i>Agregar todo al Carrito!
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishList;
