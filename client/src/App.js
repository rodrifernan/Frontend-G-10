import Home from "./Components/Home/Home";
import "./App.css";
import HomeAcrticles from "./Components/Home/Home-article";
import { Route } from "react-router-dom";
import { CreateProducts } from "./Components/createProduct/CreateProducts";
import Header from "./Components/Headers/Header";

function App() {
	return (
		<>
			<Route path="/" component={Header}></Route>
			<Route exact path="/" component={HomeAcrticles}></Route>
			<Route exact path="/Shop" component={Home}></Route>
			<Route path="/create" component={CreateProducts} />
		</>
	);
}

export default App;
