<<<<<<< Updated upstream
import Home from "./Components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeArticle from "./Components/Home_articles/Home-articles";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route exact path="/invitado" component={HomeArticle}></Route>
      </Switch>
=======
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
>>>>>>> Stashed changes
    </>
  );
}

export default App;
