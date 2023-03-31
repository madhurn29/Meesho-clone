import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CartNavbar from "../Components/Cart/Cart.Navbar";
// import CartProductItem from "../Components/Cart/Cart.ProductItem";

const Summary = () => {
  const sum = JSON.parse(localStorage.getItem("cartPrice"));
  return (
    <Box>
      <Box margin="3% 20% 0 20%">
        <CartNavbar />
      </Box>
      <hr />
      <Box
        margin="3% 20% 0 20%"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={{ base: "2%", lg: "5%" }}
        fontFamily="-apple-system, Helvetica Neue, sans-serif, Mier Book"
      >
        {/* Summary  */}
        <Box>
          <Box>
            <Text fontWeight={"semibold"}>Product Details</Text>
          </Box>

          <Box>Cart items here </Box>

          <Box>
            <Text fontWeight={"medium"}>Delivery Address</Text>
            <Box border={"1px solid #f0f0f0"}>
              <Text fontWeight={"bold"}>Name of the user given in address</Text>
              <br />
              <Text>Address</Text>
              <Text>State - pincode</Text>
              <Text>Phone Number</Text>
            </Box>
          </Box>

          <Box>
            <Text fontWeight={"medium"}>Payment Mode</Text>
            <Box
              border={"1px solid #f0f0f0"}
              height={"50px"}
              display="flex"
              padding={"3% 0 0 3%"}
              borderRadius="3px"
            >
              <svg
                width="100"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                iconSize="20"
              >
                <path
                  d="M24.029 9.01v6.277L28 13.782 22.869.93a1 1 0 0 0-1.3-.558L0 9.011"
                  fill="#56BB8A"
                ></path>
                <path
                  d="M0 8.82h27a1 1 0 0 1 1 1v13.512a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8.82Z"
                  fill="#56BB8A"
                ></path>
                <path
                  d="M1.559 14.358c1.656-.35 2.952-1.265 3.447-2.435H23c.495 1.17 1.791 2.085 3.448 2.435v4.437c-1.657.35-2.953 1.265-3.448 2.435H5.006c-.496-1.17-1.791-2.085-3.447-2.435v-4.437Z"
                  fill="#91E5BD"
                ></path>
                <path
                  d="M13.751 19.28c1.58 0 2.86-1.277 2.86-2.852a2.857 2.857 0 0 0-2.86-2.853 2.857 2.857 0 0 0-2.86 2.853 2.857 2.857 0 0 0 2.86 2.852Z"
                  fill="#56BB8A"
                ></path>
                <path
                  d="M23.635 9.01 22.28 5.53l-.062-.153a4.018 4.018 0 0 1-3.5-1.501l-.154.062L6.296 9.01h17.34Z"
                  fill="#91E5BD"
                ></path>
                <path
                  d="M7.28 16.998a.571.571 0 1 0 0-1.142.571.571 0 0 0 0 1.143ZM19.865 16.998a.571.571 0 1 0 .002-1.142.571.571 0 0 0-.002 1.143Z"
                  fill="#56BB8A"
                ></path>
              </svg>
              <Text w={"100%"} margin={"0 35% 0 5%"} fontWeight="semibold">
                Cash on Delivery
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Price Details */}
        <Box>
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            Price Details
          </Text>
          <br />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginBottom={"2%"}
          >
            <Text>Total Products Price</Text>
            <Text>₹{sum}</Text>
          </Box>
          <hr />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            fontWeight={"semibold"}
            marginTop={"2%"}
          >
            <Text>Order Total</Text>
            <Text>₹{sum}</Text>
          </Box>
          <Box marginTop={"5%"}>
            <Link to="/cart/thankyou">
              <Button
                bg={"#f43297"}
                color={"white"}
                w={"100%"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Place Order
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
