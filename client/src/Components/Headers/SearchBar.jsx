import React from "react";

const SearchBar = () => {
  return (
    <div className="col-4 px-4 search ">
      <div className="search-content justify-content-end d-flex">
        <div className=" isesion ">
          <a className=" registrarse btn text-white " href="/registro">
            Registrarse
          </a>
        </div>
        <div class="input-group rounded col-6">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Buscar un producto..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
