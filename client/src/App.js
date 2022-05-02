import { Route } from "react-router-dom";
import "./App.css";

import Form from "./Components/Form/Form";
import Header from "./Components/Headers/Header";
import { Footer } from "./Components/footer/Footer";
import { CreateProducts } from "./Components/createProduct/CreateProducts";
import Home from "./Components/Home/Home-article";
function App() {
	return (
		<>
			<Route path="/" component={Header}></Route>
			<Route exact path="/" component={Home}></Route>
			<Route path="/create" component={CreateProducts} />
			<Route path="/registro" component={Form} />
			<Route path="/" component={Footer}></Route>
		</>
	);
}

export default App;
