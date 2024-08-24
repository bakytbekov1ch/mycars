import React from "react";
import Apple from "../Apple/Apple";
import Hero from "../Hero/Hero";
import Delivery from "../Delivery/Delivery";
import Budget from "../Budget/Budget";
import Main from "../Main/Main";
import Statis from "../Statis/Statis";

function Home() {
  return (
    <div>
      <Apple />
      <Hero />
      <Delivery />
      <Budget />
      <Main />
      <Statis />
    </div>
  );
}

export default Home;
