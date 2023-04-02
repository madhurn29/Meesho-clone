import React from "react";
import { Box, Image } from "@chakra-ui/react";
import meesho from "../Images/meesho.png";
import CartBreadCrumb from "./Cart.breadCrumb";
import { Link } from "react-router-dom";
// import { AspectRatio } from "@chakra-ui/react";

const CartNavbar = () => {
  return (
    <Box marginTop={"-3%"} display={{ sm: "flex", md: "flex", lg: "flex" }}>
      <Box marginLeft={"-20%"}>
        <Link to="/">
          <Image w={"60%"} src={meesho}></Image>
        </Link>
      </Box>
      <Box marginLeft={{ base: "-8%", md: "10%", lg: "20%" }}>
        <CartBreadCrumb />
      </Box>
    </Box>
  );
};

export default CartNavbar;
