import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import CartBreadCrumb from "../Components/Cart/Cart.breadCrumb";
import CartProductItem from "../Components/Cart/Cart.ProductItem";

const Cartpage = () => {
  const [data, setData] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  const getCartData = () => {
    axios
      .get("https://63c701b54ebaa80285521e6e.mockapi.io/men")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div
      style={{
        margin: "3% 20% 0 20%",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "5%",
        fontFamily: "-apple-system, Helvetica Neue, sans-serif, Mier Book",
      }}
    >
      <Box>
        {/* <Box>
          <CartBreadCrumb />
        </Box> */}
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
            return <CartProductItem {...e} key={e.id} />;
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
          <Text>₹{cartPrice}</Text>
        </Box>
        <hr />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          fontWeight={"semibold"}
          marginTop={"2%"}
        >
          <Text>Order Total</Text>
          <Text>₹{cartPrice}</Text>
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
          <Button bg={"#f43297"} color={"white"} w={"100%"}>
            Continue
          </Button>
          <Image src="https://images.meesho.com/images/marketing/1588578650850.webp"></Image>
        </Box>
      </Box>
    </div>
  );
};

export default Cartpage;