import { React } from "react";

const Form = () => {
  /*const [validate, setValidate] = useState({});
  const dispatch = useDispatch();
  const [error, setError] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickName: "",
  });

  const validation = (form) => {
    let validations = {};
    let validator =
      /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    if (!form.email.trim()) {
      validations.email = "El campo esta vacio";
      console.log(form.email);
    } else if (!validator.test(form.email.trim())) {
      validations.email = "El correo es desconocido";
    }
    if (!form.password) {
      validations.password = "El campo esta vacio";
    }
    if (!form.password.trim()) {
      validations.nickName = "El campo está vacio";
    }
    return validations;
  };
  const handleOnchangeActivity = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setValidate(
      validation({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postClient(form));
    alert("Usuario Ingresado");
    setForm({
      email: "",
      password: "",
      nickName: "",
    });
  };

  useEffect(() => {
    if (
      form.email.length > 0 &&
      form.password.length > 0 &&
      form.nickName.length > 0
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [form, setError]);*/
const handleOnSubmit  = () => {

}
const handleOnchangeActivity = () => {

}

  return (
    <div>
      <div className="container w-50 my-5">
        <form onSubmit={handleOnSubmit}>
          <div className="text-left py-3 title-form">
            <h1 className="text-white">Formulario </h1>
            <h1 className="text-white">De </h1>
            <h1 className="text-white">Registro </h1>
            <h4 className="text-white text-left pt-3">
              Sus futuros productos los espera
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
          </div>
          <div className="mb-4 ">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="user">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name={"nickName"}
                className="form-control"
                placeholder="Nombre de usuario"
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
