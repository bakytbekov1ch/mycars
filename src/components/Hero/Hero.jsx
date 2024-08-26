import React from "react";
import { NumberMyA1 } from "../../data/number";
import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          {NumberMyA1.map((item, index) => (
            <Link key={index} to="/product">
              <div className="hero__block">
                <img src={item.image} alt="" />
                <div className="hero__mx">
                  <h1>{item.name}</h1>
                  <h2>{item.price} ₽</h2>
                  <h3>
                    {item.main} ч / {item.apple} %
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
