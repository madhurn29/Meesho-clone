import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Adminpages/AddProduct";
import Dashboard from "../Adminpages/Dashboard";

import Store from "../Adminpages/Store";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/addproducts" element={<AddProduct />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
