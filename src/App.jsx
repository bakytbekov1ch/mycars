import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Search from "./components/Search/Search";
import Seccsess from "./components/Seccsess/Seccsess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/success" element={<Seccsess />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
