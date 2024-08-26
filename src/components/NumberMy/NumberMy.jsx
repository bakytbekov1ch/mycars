import React from "react";

import { NumberMyA1 } from "../../data/number";
import line from "../../assets/images/line.png";
import { IoMdExit } from "react-icons/io";

import "./NumberMy.scss";
import { Link } from "react-router-dom";

function NumberMy() {
  function handleClick() {
    alert("Скоро работает");
  }

  return (
    <div className="numbermy">
      {NumberMyA1.map((item, index) => (
        <div key={index} className="numbermy__a1">
          <img src={item.image} alt="" />
          <Link to="/">
            <IoMdExit className="number__icon" />
          </Link>
          <h2>{item.name}</h2>
          <div className="numbermy__a2">
            <h3>{item.price} ₽</h3>
            <h3 style={{ color: "red" }}>{item.apple} %</h3>
          </div>
          <button onClick={handleClick}>
            <h4>{item.main} ч</h4>
            <img src={line} alt="" />
            <h4>{item.hero} ₽</h4>
          </button>
        </div>
      ))}
    </div>
  );
}

export default NumberMy;
