import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import CartNavbar from "../Components/Cart/Cart.Navbar";
import { Link } from "react-router-dom";

const Payment = () => {
  const sum = JSON.parse(localStorage.getItem("cartPrice"));
  const [resell, setResell] = useState(false);
  const [marginPrice, setMarginPrice] = useState("");
  return (
    <Box>
      {/* Navbar */}
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
        <Box>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              Payment Method
            </Text>
            <svg
              width="80"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.117 3c-.776 0-2.073.298-3.294.63a68.637 68.637 0 0 0-3.248.979 1.733 1.733 0 0 0-1.174 1.42c-.67 5.036.885 8.769 2.773 11.238a13.249 13.249 0 0 0 2.832 2.76c.434.307.837.542 1.178.703.316.148.654.27.933.27.28 0 .617-.122.933-.27.412-.2.806-.436 1.179-.703a13.248 13.248 0 0 0 2.831-2.76c1.888-2.47 3.444-6.202 2.774-11.238a1.733 1.733 0 0 0-1.175-1.421 70.248 70.248 0 0 0-3.248-.98C13.191 3.3 11.893 3 11.117 3Zm2.414 6.69a.563.563 0 1 1 .797.796l-3.375 3.375a.564.564 0 0 1-.797 0L8.47 12.173a.563.563 0 0 1 .796-.796l1.29 1.29L13.53 9.69Z"
                fill="#ADC6FF"
              ></path>
              <path
                d="m24.117 3.54.13 1.12 1.79-.98V9.5h1.11v-7h-1l-2.03 1.04ZM31.596 9.65c1.61 0 2.65-1.45 2.65-3.65s-1.04-3.65-2.68-3.65c-1.62 0-2.65 1.45-2.65 3.65s1.03 3.65 2.68 3.65Zm0-1.02c-1 0-1.53-1.07-1.53-2.63 0-1.56.52-2.63 1.5-2.63 1 0 1.53 1.07 1.53 2.63 0 1.56-.53 2.63-1.5 2.63ZM38.149 9.65c1.61 0 2.65-1.45 2.65-3.65s-1.04-3.65-2.68-3.65c-1.62 0-2.65 1.45-2.65 3.65s1.03 3.65 2.68 3.65Zm0-1.02c-1 0-1.53-1.07-1.53-2.63 0-1.56.52-2.63 1.5-2.63 1 0 1.53 1.07 1.53 2.63 0 1.56-.53 2.63-1.5 2.63ZM43.492 6.25c.89 0 1.6-.69 1.6-1.95s-.71-1.95-1.6-1.95c-.88 0-1.59.69-1.59 1.95s.71 1.95 1.59 1.95Zm4.8-3.75h-.86l-4.65 7h.86l4.65-7Zm-4.8 2.94c-.43 0-.73-.37-.73-1.14 0-.77.3-1.14.73-1.14s.74.37.74 1.14c0 .77-.31 1.14-.74 1.14Zm4.09 4.21c.89 0 1.6-.69 1.6-1.95s-.71-1.95-1.6-1.95c-.88 0-1.59.69-1.59 1.95s.71 1.95 1.59 1.95Zm0-.81c-.43 0-.73-.37-.73-1.14 0-.77.3-1.14.73-1.14.44 0 .74.37.74 1.14 0 .77-.3 1.14-.74 1.14ZM55.454 9.65c1.46 0 2.48-.86 2.48-2.17 0-2.68-3.6-1.51-3.6-3.18 0-.6.48-.95 1.13-.95.75 0 1.22.44 1.33 1.08l1.11-.2c-.18-1.1-1.08-1.88-2.41-1.88-1.35 0-2.32.82-2.32 2.05 0 2.68 3.59 1.51 3.59 3.2 0 .63-.51 1.06-1.28 1.06-.69 0-1.35-.37-1.47-1.08l-1.11.24c.2 1.17 1.3 1.83 2.55 1.83ZM65.296 9.5l-2.62-7.04h-1.27l-2.62 7.04h1.21l.63-1.81h2.8l.64 1.81h1.23Zm-3.24-5.76 1.03 2.92h-2.09l1.02-2.92h.04ZM71.332 2.5h-4.58v7h1.14V6.55h2.58V5.51h-2.58V3.54h3.44V2.5ZM77.692 2.5h-4.65v7h4.65V8.46h-3.51V6.5h2.66V5.45h-2.66V3.54h3.51V2.5ZM27.307 18.9c1.35 0 2.32-.95 2.32-2.2 0-1.37-1.09-2.2-2.42-2.2h-2.49v7h1.14v-2.6h1.45Zm1.14-2.2c0 .61-.42 1.15-1.33 1.15h-1.26v-2.3h1.15c1.03 0 1.44.56 1.44 1.15ZM36.452 21.5l-2.62-7.04h-1.27l-2.62 7.04h1.21l.63-1.81h2.8l.64 1.81h1.23Zm-3.24-5.76 1.03 2.92h-2.09l1.02-2.92h.04ZM39.661 21.5v-2.93l2.43-4.07h-1.25l-1.69 2.95h-.05l-1.69-2.95h-1.33l2.44 4.07v2.93h1.14ZM50.851 21.5v-7h-1.7l-2 5.26h-.04l-1.99-5.26h-1.77v7h1.14v-5.52h.04l2.08 5.52h.98l2.08-5.52h.04v5.52h1.14ZM57.51 14.5h-4.65v7h4.65v-1.04H54V18.5h2.66v-1.05H54v-1.91h3.51V14.5ZM65.344 21.54V14.5h-1.14v5.28l-3.67-5.32h-1.27v7.04h1.14v-5.28l3.67 5.32h1.27ZM72.067 14.5h-5.31v1.05h2.09v5.95h1.14v-5.95h2.08V14.5ZM75.403 21.65c1.46 0 2.48-.86 2.48-2.17 0-2.68-3.6-1.51-3.6-3.18 0-.6.48-.95 1.13-.95.75 0 1.22.44 1.33 1.08l1.11-.2c-.18-1.1-1.08-1.88-2.41-1.88-1.35 0-2.32.82-2.32 2.05 0 2.68 3.59 1.51 3.59 3.2 0 .63-.51 1.06-1.28 1.06-.69 0-1.35-.37-1.47-1.08l-1.11.24c.2 1.17 1.3 1.83 2.55 1.83Z"
                fill="#999"
              ></path>
            </svg>
          </Flex>
          <br />
          <Box display={"flex"} margin="0 0 3% 2%">
            <Text fontSize={"2xs"}>PAY IN CASH</Text>
            <Box
              height={"1px"}
              bg="rgb(223,223,223)"
              borderRadius={"2px"}
              w="80%"
              margin={"1% 0 0 2%"}
            ></Box>
          </Box>
          <Box
            bg={"#d2f4e9"}
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
            <svg
              // fill="greenBase"
              xmlns="http://www.w3.org/2000/svg"
              iconSize="20"
            >
              <path
                // fill-rule="evenodd"
                // clip-rule="evenodd"
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM6.355 12.322l2.761 2.76 7.863-7.85A.793.793 0 1 1 18.1 8.355l-8.42 8.413a.793.793 0 0 1-1.122 0l-3.326-3.324a.791.791 0 0 1 .56-1.354c.211 0 .413.084.562.233Z"
                fill="#06A759"
              ></path>
            </svg>
          </Box>
          <br />

          <Box border={"1px solid #f0f0f0"} p="5">
            <Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text fontWeight={"bold"} fontSize="lg">
                  Reselling the Order?
                </Text>
                <Flex gap={"10px"}>
                  <Button
                    borderRadius={"45%"}
                    bg={resell ? null : "#fde9f2"}
                    color={resell ? null : "#f6459f"}
                    border={resell ? null : "1px solid #f6459f"}
                    onClick={() => setResell(false)}
                  >
                    No
                  </Button>
                  <Button
                    borderRadius={"45%"}
                    bg={resell ? "#fde9f2" : null}
                    color={resell ? "#f6459f" : null}
                    border={resell ? "1px solid #f6459f" : null}
                    onClick={() => setResell(true)}
                  >
                    Yes
                  </Button>
                </Flex>
              </Box>

              <Text fontSize={"xs"} color="#999999">
                Click on 'Yes' to add Final Price
              </Text>
            </Box>
            {resell ? (
              <Box>
                <br />
                <hr />
                <br />
                <Text fontWeight={"semibold"}>Cash to be Collected</Text>
                <br />
                <Input
                  color={"#999999"}
                  variant="flushed"
                  placeholder={`Order Total (₹ ${sum}) + Your Margin`}
                  value={marginPrice}
                  onChange={(e) => setMarginPrice(e.target.value)}
                ></Input>
                <Text
                  p={2}
                  fontWeight={"medium"}
                  color={Number(marginPrice) > sum ? "#028d63" : "#ell800"}
                >
                  Your Margin : ₹
                  {Number(marginPrice) > 0 ? Number(marginPrice) - sum : 0}
                </Text>
                <br />
                <Box bg={"#f9f9f9"}>
                  <Text fontSize={"xs"} p={2}>
                    Final price will be printed on the invoice
                  </Text>
                </Box>
              </Box>
            ) : null}
          </Box>
        </Box>

        {/* Cart Price */}
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
          <Box marginTop={"5%"}>
            <Text
              fontSize={"12px"}
              fontWeight={"demi"}
              color={"greyBase"}
              textAlign={"center"}
              bg={"whiteSmoke"}
              p={"2"}
              marginBottom={"3%"}
              borderRadius={"2%"}
            >
              Clicking on ‘Continue’ will not deduct any money
            </Text>
            <Link to="/cart/summary">
              <Button
                bg={"#f43297"}
                color={"white"}
                w={"100%"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Continue
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
