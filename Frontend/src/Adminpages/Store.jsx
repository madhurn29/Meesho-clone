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

const Store = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  //   console.log(category);
  //   let obj = {
  //     params: {
  //       category: searchParams.get("category"),
  //       order: searchParams.get("order"),
  //       sortBy: searchParams.get("order") && "price",
  //     },
  //   };
  const category = searchParams.get("category");
  const order = searchParams.get("order") && "price";
  const sortBy = searchParams.get("order");
  useEffect(() => {
    dispatch(getProduct(category, order, sortBy));
  }, [dispatch, searchParams]);

  const product = useSelector((store) => {
    return store.adminReducer.products;
  });
  console.log(product);

  return (
    <>
      <AdminNavbar />
      <Flex>
        <Sidebar />

        <SimpleGrid
          width="100%"
          margin="auto"
          columns={{ base: 1, md: 3, lg: 4 }}
          spacing={8}
        >
          {product?.map((product) => (
            <ProductsCard product={product} height={200} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Store;
