import React from "react";
import { Box, Image } from "@chakra-ui/react";
import meesho from "../Images/meesho.png";
import CartBreadCrumb from "./Cart.breadCrumb";

const CartNavbar = () => {
  return (
    <Box display={"flex"}>
      <Box marginLeft={"-20%"}>
        <Image w={"70%"} src={meesho}></Image>
      </Box>
      <Box marginLeft={"20%"}>
        <CartBreadCrumb />
      </Box>
    </Box>
  );
};

export default CartNavbar;
