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
    <div className="search">
      <div className="search-content justify-content-start d-flex">
        <div className="input-group inputSearch rounded ">
          <input
            type="text"
            placeholder="Buscar"
            onChange={handleOnChange}
            required
          />

          <i
            class="fas fa-search icon searchButton"
            onClick={handleOnSubmit}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
