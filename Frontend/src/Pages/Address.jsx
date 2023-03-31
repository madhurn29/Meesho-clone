import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CartNavbar from "../Components/Cart/Cart.Navbar";
import { Link } from "react-router-dom";

const Address = () => {
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
        {/* Address form */}
        <Box>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Select Delivery Address
          </Text>
          <br />
          <Box>
            <Box display={"flex"}>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="orangeT1"
                iconSize="20"
              >
                <path
                  d="M18.066 16.735a5.886 5.886 0 0 1-4.193 1.739 5.879 5.879 0 0 1-4.192-1.74l-6.416-6.41A5.893 5.893 0 0 1 1.531 6.13c0-1.584.616-3.074 1.734-4.192a1.386 1.386 0 0 1 1.966 0l2.143 2.143a1.386 1.386 0 0 1 0 1.965l-.914.914a2.362 2.362 0 0 0 0 3.34l3.238 3.244a2.362 2.362 0 0 0 3.341 0l.918-.919c.524-.523 1.442-.523 1.966.005l2.143 2.138a1.386 1.386 0 0 1 0 1.966Zm1.082-3.044-2.143-2.143a2.921 2.921 0 0 0-4.13 0l-.914.914a.83.83 0 0 1-1.18 0L7.538 9.224a.836.836 0 0 1 0-1.18l.918-.919c.55-.55.852-1.282.852-2.063 0-.78-.302-1.513-.852-2.063L6.313.856A2.907 2.907 0 0 0 4.25 0a2.918 2.918 0 0 0-2.063.856A7.41 7.41 0 0 0 0 6.131a7.41 7.41 0 0 0 2.187 5.275l6.411 6.411A7.417 7.417 0 0 0 13.873 20a7.407 7.407 0 0 0 5.27-2.183A2.9 2.9 0 0 0 20 15.754c0-.78-.302-1.513-.852-2.063Z"
                  fill="#666"
                ></path>
              </svg>
              <Text fontSize={"lg"} fontWeight={"semibold"} marginLeft={"2"}>
                Contact Details
              </Text>
            </Box>
            <Box>
              <Input variant={"flushed"} placeholder="Name"></Input>
              <Input variant={"flushed"} placeholder="PhoneNumber"></Input>
            </Box>
          </Box>
          <br />
          <br />
          <Box>
            <Box display={"flex"}>
              <HiOutlineLocationMarker />
              <Text fontSize={"lg"} fontWeight={"semibold"} marginLeft={"2"}>
                Address
              </Text>
            </Box>
            <Box>
              <Input
                variant={"flushed"}
                placeholder="House no./ Building Name"
              ></Input>
              <Input
                variant={"flushed"}
                placeholder="Road Name/ Area/ Colony"
              ></Input>
              <Input variant={"flushed"} placeholder="Pincode"></Input>
              <Box display={"flex"} gap={"2%"}>
                <Input variant={"flushed"} placeholder="City"></Input>
                <Input variant={"flushed"} placeholder="State"></Input>
              </Box>

              <Input
                variant={"flushed"}
                placeholder="Nearby Location(optional)"
              ></Input>
            </Box>
          </Box>
          <br />
          <Link to="/cart/payment">
            <Button w={"100%"} color={"white"} bg={"#f43297"}>
              Save Address & Continue
            </Button>
          </Link>
        </Box>

        {/* //Cart Price */}
        <Box w={"80%"}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
