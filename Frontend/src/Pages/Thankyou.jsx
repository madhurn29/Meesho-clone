import { Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Thankyou = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Image></Image>
      </Box>
      <Link to="/">
        <Button
          bg={"#f43297"}
          color={"white"}
          w={"100"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Return to home
        </Button>
      </Link>
    </Box>
  );
};

export default Thankyou;
