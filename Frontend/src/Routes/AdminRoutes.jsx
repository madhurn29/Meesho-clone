import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProducts from "../Admin/EditProducts";
import AddProduct from "../Adminpages/AddProduct";
import Dashboard from "../Adminpages/Dashboard";

import Store from "../Adminpages/Store";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/addproducts" element={<AddProduct />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path={"/editproduct/:id"} element={<EditProducts />} />
    </Routes>
  );
};

export default AdminRoutes;
