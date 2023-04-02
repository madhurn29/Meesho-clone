import React from "react";
import { Box, Image } from "@chakra-ui/react";
import meesho from "../Images/meesho.png";
import CartBreadCrumb from "./Cart.breadCrumb";
import { Link } from "react-router-dom";
// import { AspectRatio } from "@chakra-ui/react";

const CartNavbar = () => {
  return (
    <Box
      marginTop={{ base: "8%", md: "3%", lg: "-3%" }}
      display={{ sm: "flex", md: "flex", lg: "flex" }}
    >
      <Box
        marginLeft={{ base: "30%", sm: "-20%", md: "-20%", lg: "-20%" }}
        marginBottom={{ base: "3%", sm: "5%", md: "3%", lg: "1%" }}
      >
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
