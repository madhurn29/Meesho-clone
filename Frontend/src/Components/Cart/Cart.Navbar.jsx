import React from "react";
import { Box, Image } from "@chakra-ui/react";
import meesho from "../Images/meesho.png";
import CartBreadCrumb from "./Cart.breadCrumb";

const CartNavbar = () => {
  return (
    <Box display={"flex"}>
      <Image src={meesho}></Image>
      {/* <CartBreadCrumb /> */}
    </Box>
  );
};

export default CartNavbar;
