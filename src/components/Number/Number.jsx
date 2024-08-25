import React from "react";

import { NumberA1 } from "../../data/number";
import line from "../../assets/images/line.png";
import { IoMdExit } from "react-icons/io";

import "./Number.scss";
import { Link } from "react-router-dom";

function Number() {
  // function handleSuccsess() {
  //   alert("Скоро работает");
  // }

  return (
    <div className="number">
      {NumberA1.map((item, index) => (
        <div key={index} className="number__a1">
          <img src={item.image} alt="" />
          <Link to="/">
            <IoMdExit className="number__icon" />
          </Link>
          <h2>{item.name}</h2>
          <div className="number__a2">
            <h3>{item.price} ₽</h3>
            <h3 style={{ color: "red" }}>{item.apple} %</h3>
          </div>
          <Link to="/search">
            <button /*onClick={handleSuccsess}*/>
              <h4>{item.main} ₽</h4>
              <img src={line} alt="" />
              <h4>{item.hero} ₽</h4>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Number;
