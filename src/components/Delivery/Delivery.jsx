import React from "react";

import { BiLogoTelegram } from "react-icons/bi";

import "./Delivery.scss";
import { Link } from "react-router-dom";

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
              <Link to="https://t.me/+MRKiDHXw2gNhZWEy">
                <BiLogoTelegram />
                Телеграм Гурпу
              </Link>
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
