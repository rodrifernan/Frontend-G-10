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
    </>
  );
}

export default App;
