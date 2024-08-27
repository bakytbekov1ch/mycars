import React from "react";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <h1>
              MyCar<span>.uz</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
