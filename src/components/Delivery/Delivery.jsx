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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            veritatis exercitationem fugit alias. Nihil, quia error? Ipsum
            dolore temporibus exercitationem.
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
