import React from "react";
import "./HeaderHome.css";

const HeaderLanding = () => {
  return (
    <header>
      <div className="content text-light">
        <div className="enlaces col-4" id="enlaces">
          <ul className=" landing nav">
            <li className="btn nav-item">
              <a
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Ingresa como invitado"
                className="nav-link btn text-light"
                href="/Shop"
              >
                Invitado
              </a>
            </li>
            <li className="btn nav-item">
              <button
                type="button"
                class="btn text-light aboutUs"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Sobre Nosotros
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4 mainTitle text-center">
          <h3>MassiveMachine</h3>
        </div>
        <div className="col-4">
          <ul className="btn nav justify-content-end">
            <li className="btn nav-item">
              <a className="nav-link btn text-light" href="/memebership-form">
                Suscribirse
              </a>
            </li>
            <li className="btn nav-item">
              <a className="nav-link btn text-light" href="/send-email">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default HeaderLanding;
