import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Budget.scss";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/mycar";

function Budget() {
  const [value, setValue] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="budget">
      <div className="container">
        <h1>Статистика инвестиций</h1>
        <div className="budget__content">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Payeer</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {value.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Budget;
