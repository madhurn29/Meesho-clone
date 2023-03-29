import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "../Components/ProductPage/Product";
import SingleProduct from "../Components/ProductPage/SingleProduct";

import Homepage from "../Pages/Homepage";

function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}
      <Route path="/" element={<Homepage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>
  );
}

export default Allroutes;
