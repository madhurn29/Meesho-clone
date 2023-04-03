import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import { getProduct } from "../Redux/AdminRedux/action";
import AdminNavbar from "./AdminNavbar";
import StoreNavbar from "./StoreNavbar";
import {
  Box,
  Text,
  Button,
  Image,
  useDisclosure,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import ProductsCard from "../Admin/ProductsCard.admin";
import EditProductModal from "./EditProductModal";
import LoadingPage from "./LoadingPage";

const Store = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  let obj = {
    params: {
      category: searchParams.get("category"),
      sortBy: searchParams.get("order") && "price",
      order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(obj));
  }, [dispatch, searchParams]);

  const product = useSelector((store) => {
    return store.adminReducer.products;
  });
  const isLoading = useSelector((store) => {
    return store.adminReducer.isLoading;
  });
  console.log(isLoading);

  return (
    <>
      <AdminNavbar />
      <Flex>
        <Sidebar />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <SimpleGrid
            width="100%"
            margin="auto"
            columns={{ base: 1, md: 3, lg: 4 }}
            spacing={8}
          >
            {product?.map((product) => (
              <ProductsCard product={product} params={obj} height={270} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </>
  );
};

export default Store;
