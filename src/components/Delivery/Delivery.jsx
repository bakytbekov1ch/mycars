import React from "react";

import { BiLogoTelegram } from "react-icons/bi";

import "./Delivery.scss";

function Delivery() {
  return (
    <div className="delivery">
      <div className="container">
        <h1>О нас</h1>
        <div className="delivery__content">
          <p>
            Оплата производится через эту карту <mark>P1088988776</mark>
          </p>

          <div className="delivey__block">
            <div className="mx">
              <BiLogoTelegram />
              Телеграм Гурпу
            </div>
            <div className="mx">
              <BiLogoTelegram />
              ответ на вопрос
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
