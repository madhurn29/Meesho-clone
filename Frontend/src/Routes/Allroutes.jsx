import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import { Product } from "../Components/ProductPage/Product";
import SingleProduct from "../Components/ProductPage/SingleProduct";

import Address from "../Pages/Address";
import Cartpage from "../Pages/Cartpage";
import Payment from "../Pages/Payment";
import Summary from "../Pages/Summary";

import Thankyou from "../Pages/Thankyou";

// import Homepage from "../Pages/Homapage";


function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}

      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/cart/address" element={<Address />}></Route>
      <Route path="/cart/payment" element={<Payment />}></Route>
      <Route path="/cart/summary" element={<Summary />}></Route>
      <Route path="/cart/thankyou" element={<Thankyou />}></Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default Allroutes;
