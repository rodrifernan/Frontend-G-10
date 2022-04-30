import { Route } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form/Form";
import Registro from "./Components/Home/Registro";
import Home from "./Components/Home/Home";

import { CreateProducts } from "./Components/createProduct/CreateProducts";
import Header from "./Components/Headers/Header";

function App() {
  return (
    <>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Shop" component={Home}></Route>
      <Route path="/create" component={CreateProducts} />
      <Route exact path="/Registro" component={Form}></Route>
    </>
  );
}

export default App;
