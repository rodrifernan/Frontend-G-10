import React, { useState } from "react";
import { getByName } from "../../redux/reducer/products";
import { useDispatch } from "react-redux";
import "./SearchBar.css";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleOnChange = (e) => {
		setInput(e.target.value);
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(getByName(input));
		setInput("");
	};


	return (
		<div className="col  search ">
			<div className="search-content justify-content-start d-flex">
				<div className="input-group rounded col">
					<input
						type="search"
						className="form-control rounded"
						placeholder="Buscar un producto..."
						aria-label="Search"
						aria-describedby="search-addon"
						onChange={handleOnChange}
					/>
					<button
						onClick={handleOnSubmit}
						className="input-group-text border-0"
						id="search-addon"
					>
						<i className="fas fa-search"></i>
					</button>
				</div>
			</div>
		</div>
	);
};
export default SearchBar;
