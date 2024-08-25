import React from "react";

import "./Search.scss";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="search__content">
          <div className="search__inputs">
            <label htmlFor="#">Ваше Payeer кошелёк</label>
            <input type="text" placeholder="P12345678" />
          </div>
          <div className="search__inputs">
            <label htmlFor="#">Операция №</label>
            <input type="text" placeholder="2120305022" />
          </div>
          <Link to="/seccess">
            <button>Отправить</button>
          </Link>
          <Link to="/">
            <button style={{ background: "red" }}>Выход</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
