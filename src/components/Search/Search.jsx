import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.scss";

function Search() {
  const [payeer, setPayeer] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState("");
  const naviagte = useNavigate();

  const handleSubmit = () => {
    if (!payeer || !operation) {
      setError("Пожалуйста, заполните все поля.");
    } else {
      setError("");
      naviagte("/seccess");
    }
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search__content">
          <div className="search__inputs">
            <label htmlFor="payeer">Ваше Payeer кошелёк</label>
            <input
              type="text"
              placeholder="P12345678"
              value={payeer}
              onChange={(e) => setPayeer(e.target.value)}
            />
          </div>
          <div className="search__inputs">
            <label htmlFor="operation">Операция №</label>
            <input
              type="text"
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
