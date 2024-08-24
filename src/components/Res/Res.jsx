import React from "react";

import malibu from "../../assets/images/malibu.png";
import travers from "../../assets/images/travers.png";
import onix from "../../assets/images/onix.png";

import "./Res.scss"

function Res() {
  return (
    <div className="res">
      <div className="container">
        <div className="res__content">
          <img className="res__image" src={malibu} alt="" />
          <img className="res__image2" src={travers} alt="" />
          <img className="res__image3" src={onix} alt="" />
        </div>
        <h1>Авто UZB</h1>
      </div>
    </div>
  );
}

export default Res;
