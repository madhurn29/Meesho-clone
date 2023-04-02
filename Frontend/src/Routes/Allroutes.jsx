import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "../Components/ProductPage/Product";
import SingleProduct from "../Components/ProductPage/SingleProduct";
import Address from "../Pages/Address";
import Cartpage from "../Pages/Cartpage";
import Login from "../Pages/Login";
import OTP from "../Pages/OTP";
import AdminLogin from "../Pages/AdminLogin";
import Payment from "../Pages/Payment";
import Summary from "../Pages/Summary";
import { Mens } from "../Components/ProductPage/Mens";
import { WomensWestern } from "../Components/ProductPage/WomensWestern";
import { WomenEthnic } from "../Components/ProductPage/WomenEthnic";
import { Kids } from "../Components/ProductPage/Kids";
import { Makeup } from "../Components/ProductPage/Makeup";
import { Kitchen } from "../Components/ProductPage/Kitchen";
import SingleProductMens from "../Components/ProductPage/SingleProductMens";
import { SingleProductWestern } from "../Components/ProductPage/SingleProductWestern";
import { SingleProductKitchen } from "../Components/ProductPage/SingleProductKitchen";
import { SingleProductMakeup } from "../Components/ProductPage/SingleProductMakeup";
import { SingleProductKids } from "../Components/ProductPage/SingleProductKids";
import { SingleProductEthenic } from "../Components/ProductPage/SingleProductEthenic";
import Thankyou from "../Pages/Thankyou";
import Jwellery from "../Pages/Jwellery";
import Bags from "../Pages/Bags";
import Electronics from "../Pages/Electronics";
import Homepage from "../Pages/Homepage/Homepage";

import SignUp from "../Pages/SignUp";



import AdminOTP from "../Pages/AdminOTP";

import AdminOTP from "../Pages/AdminOTP";
import PrivateRoute from "./PrivateRoutes";


function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}
      {/* {ram} */}
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cartpage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart/address"
        element={
          <PrivateRoute>
            <Address />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart/summary"
        element={
          <PrivateRoute>
            <Summary />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart/thankyou"
        element={
          <PrivateRoute>
            <Thankyou />
          </PrivateRoute>
        }
      ></Route>

      {/* {vishal} */}
      <Route path="/" element={<Homepage />} />
      <Route path="/jwellery" element={<Jwellery />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/electronics" element={<Electronics />} />

      {/* {ankit} */}
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womensWestern" element={<WomensWestern />} />
      <Route path="/womensEthenic" element={<WomenEthnic />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/mens/:id" element={<SingleProductMens />} />
      <Route path="/womensWestern/:id" element={<SingleProductWestern />} />
      <Route path="/womensEthenic/:id" element={<SingleProductEthenic />} />
      <Route path="/kids/:id" element={<SingleProductKids />} />
      <Route path="/makeup/:id" element={<SingleProductMakeup />} />
      <Route path="/kitchen/:id" element={<SingleProductKitchen />} />
      {/* <Route path="/product/:id" element={<SingleProduct/>}/> */}

      {/* {madhur} */}
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/otp" element={<OTP />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminotp" element={<AdminOTP />}></Route>
    </Routes>
  );
}

export default Allroutes;
