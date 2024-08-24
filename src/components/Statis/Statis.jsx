import React from "react";
import { Statistika } from "../../data/statistila";

import "./Statis.scss";

function Statis() {
  return (
    <div className="statis">
      <div className="container">
        <h1>Статистика</h1>
        <div className="statis__content">
          {Statistika.map((item, index) => (
            <div key={index} className="statis">
              <h2>{item.number}</h2>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statis;
