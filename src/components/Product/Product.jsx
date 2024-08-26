import React from "react";
import Number from "../Number/Number";
import NumberCar from "../NumberCar/NumberCar";
import NumberMy from "../NumberMy/NumberMy";

import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          <h1>№ 1</h1>
          <Number />
          <h1>№ 2</h1>
          <NumberCar />
          <h1>№ 3</h1>
          <NumberMy />
        </div>
      </div>
    </div>
  );
}

export default Product;
