import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.scss";
import axios from "axios";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/mycar";

function Search() {
  const [payeer, setPayeer] = useState("");
  const [operation, setOperation] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!payeer || !operation || !price) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    const value = {
      payeer,
      price,
      operation,
      date: formattedDate,
    };

    axios
      .post(`${API}`, value)
      .then((res) => {
        console.log(res);
        setError("");
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
        setError("Произошла ошибка при отправке данных.");
      });
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search__content">
          <h1 className="search__title">P1088988776</h1>
          <div className="search__inputs">
            <label htmlFor="payeer">Ваше Payeer кошелёк</label>
            <input
              type="text"
              name="payeer"
              placeholder="P12345678"
              value={payeer}
              onChange={(e) => setPayeer(e.target.value)}
            />
          </div>
          <div className="search__inputs">
            <label htmlFor="price">Введите сумму</label>
            <input
              type="text"
              name="price"
              placeholder="Сумма"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="search__inputs">
            <label htmlFor="operation">Операция №</label>
            <input
              type="text"
              name="operation"
              placeholder="2120305022"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleSubmit}>Отправить</button>
          <Link to="/">
            <button style={{ background: "red" }}>Выход</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
