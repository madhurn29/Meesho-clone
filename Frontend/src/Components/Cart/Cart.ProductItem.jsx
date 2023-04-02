import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";
// import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const CartProductItem = ({
  _id,
  title,
  images,
  price,
  reviews,
  rating,
  delivery,
  quantity,
  handleDelete,
  getCartData,
}) => {
  const [qty, setQty] = useState(quantity);
  // console.log(qty);

  const handleQuantity = () => {
    // console.log(qty, _id);
    const payload = { quantity: qty };
    fetch(`https://long-lime-fly-tux.cyclic.app/cart/update/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        getCartData();
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    handleQuantity();
  }, [qty]);

  return (
    <Box border={"1px solid #dfdfdf"} key={_id} marginBottom={"3%"}>
      <Box display={"flex"} p={"3%"}>
        <Image
          borderRadius={"20%"}
          w={{ base: "35%", md: "22%", lg: "18%" }}
          src={images}
        ></Image>
        <Box>
          <Box marginLeft={"5%"}>
            <Text fontWeight={"medium"}>{title}</Text>
            <Text fontWeight={"semibold"}>₹{price}</Text>
          </Box>
          <Flex>
            <Button
              color={"#f43297"}
              variant="ghost"
              isDisabled={qty === 1}
              _hover={
                qty > 1
                  ? {
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }
                  : null
              }
              onClick={() => {
                setQty((prev) => prev - 1);
                handleQuantity();
              }}
            >
              -
            </Button>
            <Button
              fontWeight={"semibold"}
              color={"#f43297"}
              variant="ghost"
              marginLeft="1"
            >
              {qty}
            </Button>
            <Button
              color={"#f43297"}
              variant="ghost"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              // onClick={() => setQty((prev) => prev + 1)}
              onClick={() => {
                setQty((prev) => prev + 1);
                handleQuantity();
              }}
            >
              +
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Button
          fontWeight={"semibold"}
          color={"#f43297"}
          variant={"ghost"}
          marginLeft={"20%"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          onClick={() => handleDelete(_id)}
        >
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            style={{ marginRight: "2%" }}
          >
            <path
              d="m14.303 15.777-4.29-4.291-4.304 4.303c-.462.462-1.127.553-1.59.09-.461-.461-.35-1.105.113-1.567l4.303-4.304-4.312-4.312c-.462-.462-.565-1.115-.103-1.577.462-.462 1.1-.345 1.562.117L9.995 8.55l4.317-4.318c.462-.462 1.106-.574 1.568-.112.462.462.372 1.127-.09 1.59l-4.318 4.317 4.291 4.291c.462.462.58 1.1.117 1.563-.462.462-1.115.359-1.577-.103Z"
              fill="#f43297"
            ></path>
          </svg>
          Remove
        </Button>
        <hr />
      </Box>
      <Flex>
        <Text p={"3%"}>{reviews}</Text>
        <Text p={"3%"}>Rating: {rating}</Text>
        <Text p={"3%"}>{delivery}</Text>
      </Flex>
    </Box>
  );
};

export default CartProductItem;
