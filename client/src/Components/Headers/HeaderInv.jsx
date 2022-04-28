import React from "react";
import Enlaces from "./Enlaces";
import SearchBar from "./SearchBar";

const HeaderInv = () => {
  return (
    <header>
      <div className="d-flex py-2 align-items-center">
        <Enlaces />
        <div className="col-4">
          <h3 className="text-white text-center">SHOPBAG.com</h3>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};
export default HeaderInv;
