import Home from "./Components/Home/Home";
import "./App.css";
import HomeAcrticles from "./Components/Home/Home-article";
import { Route } from "react-router-dom";
import { CreateProducts } from "./Components/createProduct/CreateProducts";

function App() {
	return (
		<>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/Shop" component={HomeAcrticles}></Route>
			<Route path="/create" component={CreateProducts} />
		</>
	);
}

export default App;
