import React from "react";
import Enlaces from "./Enlaces";
import SearchBar from "./SearchBar";
import "./HeaderHome.css";

const Header = () => {
  return (
    <header>
      <div className="col-12 d-flex py-2 align-items-center">
        <Enlaces />
        <div className="col-4 text-light text-center">
          <h3>ShopBag</h3>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
