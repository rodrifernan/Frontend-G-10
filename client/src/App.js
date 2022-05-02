import { Route } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form/Form";
import Registro from "./Components/Home/Registro";
import Home from "./Components/Home/Home";
import HomeAcrticles from "./Components/Home/Home-article";
import { CreateProducts } from "./Components/createProduct/CreateProducts";
import Header from "./Components/Headers/Header";
import Carrito from "./Components/Carrito/Carrito";

function App() {
  return (
    <>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={HomeAcrticles}></Route>
      <Route exact path="/Shop" component={Home}></Route>
      <Route path="/create" component={CreateProducts} />
      <Route path="/register" component={Registro} />
      <Route path="/registro" component={Form} />
      <Route path="/carrito" component={Carrito}></Route>
    </>
  );
}

export default App;
