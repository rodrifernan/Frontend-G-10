import Home from "./Components/Home/Home";
import "./App.css";
import HomeAcrticles from "./Components/Home/Home-article";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Switch>
        <Route exact path="/Shop" component={HomeAcrticles}></Route>
      </Switch>
    </>
  );
}

export default App;
