import React from "react";
import Enlaces from "./Enlaces";
import SearchBar from "./SearchBar";

import "./Header.css";
import logo from "./LogoEcommerce.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="header col-12 d-flex py-2 align-items-center">
				<img src={logo} alt="no hay imagen" height={"50px"} />
				<Link to="/" className="col-4 text-light text-center">
					<h3>ShopBag</h3>
				</Link>
				<SearchBar />
				<Enlaces />
			</div>
		</header>
	);
};
export default Header;
