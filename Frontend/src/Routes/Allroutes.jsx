import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}
      <Route path="/" element={<Homepage/>}/>
    </Routes>
  );
}

export default Allroutes;
