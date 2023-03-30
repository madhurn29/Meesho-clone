import { Box, Text, Button, Image } from "@chakra-ui/react";
import React from "react";

const CartProductItem = ({ id, title, images, price, reviews }) => {
  return (
    <Box border={"1px solid #dfdfdf"} key={id} marginBottom={"3%"}>
      <Box display={"flex"} p={"3%"}>
        <Image borderRadius={"20%"} w={"18%"} src={images}></Image>
        <Box display={"flex"}>
          <Box marginLeft={"3%"}>
            <Text>{title}</Text>
            <Text>{price}</Text>
          </Box>
          <Box marginRight={"-10%"}>
            <Text fontWeight={"semibold"} color={"#f43297"}>
              EDIT
            </Text>
          </Box>
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
        >
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            iconSize="20"
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
      <Text p={"3%"}>Reviews : {reviews}</Text>
    </Box>
  );
};

export default CartProductItem;
