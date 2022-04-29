import { Route } from "react-router-dom";
import "./App.css";

import Registro from "./Components/Home/Registro";
import Home from "./Components/Home/Home";
import HomeAcrticles from "./Components/Home/Home-article";
import { CreateProducts } from "./Components/createProduct/CreateProducts";

function App() {
	return (
		<>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/registro" component={Registro}></Route>
			<Route exact path="/Shop" component={HomeAcrticles}></Route>
			<Route path="/create" component={CreateProducts} />
		</>
	);
}

export default App;
