import React from "react";
import { Box, Image } from "@chakra-ui/react";
import meesho from "../Images/meesho.png";
import CartBreadCrumb from "./Cart.breadCrumb";
import { Link } from "react-router-dom";

const CartNavbar = () => {
  return (
    <Box display={{ sm: "flex", md: "flex", lg: "flex" }}>
      <Box marginLeft={"-20%"}>
        <Link to="/">
          <Image w={"70%"} src={meesho}></Image>
        </Link>
      </Box>
      <Box marginLeft={{ base: "-8%", md: "10%", lg: "20%" }}>
        <CartBreadCrumb />
      </Box>
    </Box>
  );
};

export default CartNavbar;
