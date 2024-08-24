import React from "react";

import images from "../../assets/images/images.jpeg";
import kia from "../../assets/images/kia.png";

import "./Apple.scss";

function Apple() {
  return (
    <div className="apple">
      <div className="container">
        <div className="apple__content">
          <div className="apple__text">
            <h2>
              Добро пожаловать в <br />{" "}
              <span>
                MyCar
                <span
                  style={{
                    color: "white",
                    fontSize: "23px",
                    fontWeight: "400",
                  }}
                >
                  .uz
                </span>
              </span>
            </h2>
            <h3>Заработак</h3>
            <h1>107 - 194 %</h1>
          </div>
          <div className="apple__images">
            <img className="apple__fon" src={images} alt="" />
            <img className="apple__car" src={kia} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apple;
