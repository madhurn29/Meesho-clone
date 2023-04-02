import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import CartProductItem from "../Components/Cart/Cart.ProductItem";
import CartNavbar from "../Components/Cart/Cart.Navbar";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCartData = () => {
    setIsLoading(true);
    axios
      .get("https://long-lime-fly-tux.cyclic.app/cart", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price * data[i].quantity;
  }
  localStorage.setItem("cartPrice", JSON.stringify(sum));

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(`https://long-lime-fly-tux.cyclic.app/cart/delete/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getCartData();
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCartData();
  }, []);

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
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={{ base: "2%", lg: "5%" }}
        fontFamily="-apple-system, Helvetica Neue, sans-serif, Mier Book"
      >
        <Box>
          <Box>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              Cart |{" "}
              <span style={{ color: "grey", fontWeight: "normal" }}>
                {data.length > 0 ? data.length : 0} Item
              </span>
            </Text>
          </Box>
          <Box>
            {data?.map((e) => {
              return (
                <CartProductItem
                  {...e}
                  key={e._id}
                  handleDelete={handleDelete}
                  getCartData={getCartData}
                />
              );
            })}
          </Box>
        </Box>

        <Box w={"80%"}>
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            Product Details
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
            <Link to="/cart/address">
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
            <Image src="https://images.meesho.com/images/marketing/1588578650850.webp"></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartpage;
