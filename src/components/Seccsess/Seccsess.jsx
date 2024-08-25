import React from "react";
import seccsess from "../../assets/images/seccsess.png";
import "./Seccsess.scss";
import { Link } from "react-router-dom";

function Seccsess() {
  return (
    <div className="seccsess">
      <div className="container">
        <div className="seccsess__content">
          <img src={seccsess} alt="" />
          <h1>Успешно</h1>
          <p>
            Ваше требование будет проверено в течение 5-10 часов и переведено с
            торгового автомата на ваш кошелек payeer
          </p>
          <Link to="/">
            <button>Выход</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Seccsess;
