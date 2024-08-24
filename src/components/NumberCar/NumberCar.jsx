import React from "react";

import { NumberCarA1 } from "../../data/number";
import { IoMdExit } from "react-icons/io";
import line from "../../assets/images/line.png";

import "./NumberCar.scss";
import { Link } from "react-router-dom";

function NumberCar() {
  return (
    <div className="numbercar">
      {NumberCarA1.map((item, index) => (
        <div key={index} className="numbercar__a1">
          <img src={item.image} alt="" />
          <Link to="/">
            <IoMdExit className="number__icon" />
          </Link>
          <h2>{item.name}</h2>
          <div className="numbercar__a2">
            <h3>{item.price} ₽</h3>
            <h3 style={{ color: "red" }}>{item.apple} %</h3>
          </div>
          <button>
            <h4>{item.main} ₽</h4>
            <img src={line} alt="" />
            <h4>{item.hero} ₽</h4>
          </button>
        </div>
      ))}
    </div>
  );
}

export default NumberCar;
