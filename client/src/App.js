import Home from "./Components/Home/Home";
import "./App.css";
import Registro from "./Components/Home/Registro";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route exact path="/registro" component={Registro}></Route>
      </Switch>
    </>
  );
}

export default App;
