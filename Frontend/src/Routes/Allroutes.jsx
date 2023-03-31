import React from "react";
import { Routes, Route } from "react-router-dom";

import { Product } from "../Components/ProductPage/Product";
import SingleProduct from "../Components/ProductPage/SingleProduct";


import Address from "../Pages/Address";
import Cartpage from "../Pages/Cartpage";
import Homepage from "../Pages/Homepage";
// import Homepage from "../Pages/Homapage/Homepage";
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


// import Homepage from "../Pages/Homapage";


function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}

      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/cart/address" element={<Address />}></Route>
      <Route path="/cart/payment" element={<Payment />}></Route>
      <Route path="/cart/summary" element={<Summary />}></Route>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/mens" element={<Mens/>}/>
      <Route path="/womensWestern" element={<WomensWestern/>}/>
      <Route path="/womensEthenic" element={<WomenEthnic/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/makeup" element={<Makeup/>}/>
      <Route path="/kitchen" element={<Kitchen/>}/>
      <Route path="/mens/:id" element={<SingleProductMens/>}/>
      <Route path="/womensWestern/:id" element={<SingleProductWestern/>}/>
      <Route path="/womensEthenic/:id" element={<SingleProductEthenic/>}/>
      <Route path="/kids/:id" element={<SingleProductKids/>}/>
      <Route path="/makeup/:id" element={<SingleProductMakeup/>}/>
      <Route path="/kitchen/:id" element={<SingleProductKitchen/>}/> 
       {/* <Route path="/product/:id" element={<SingleProduct/>}/> */}
    </Routes>
  );
}

export default Allroutes;
