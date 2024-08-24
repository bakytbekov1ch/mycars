import React from "react";
import Number from "../Number/Number";
import NumberCar from "../NumberCar/NumberCar";
import NumberMy from "../NumberMy/NumberMy";

import "./Product.scss"

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          <Number />
          <NumberCar />
          <NumberMy />
        </div>
      </div>
    </div>
  );
}

export default Product;
