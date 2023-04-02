import React, { useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product, height }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        width="100%"
        m="auto"
        p="4"
        _hover={{ boxShadow: "lg" }}
      >
        <Box mt="2" position="relative">
          <Image
            src={product.images}
            alt={product.title}
            objectFit="cover"
            width="100%"
            height={`${height}px`}
            transition="transform 0.3s ease-out"
            transform={isHovered ? "scale(1.05)" : "scale(1)"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Box>
        <Box
          fontSize="sm"
          maxW="200px"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {product.title}
        </Box>
        <Box mt="2">
          <Box as="span" fontWeight="bold" color="teal.500">
            Rs {product.price}
          </Box>
          <Link to={`/product/${product._id}`}>
            <Box
              as="button"
              ml="2"
              color="teal.500"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Edit
            </Box>
          </Link>
          <Box as="button" ml="2" color="red.700" fontSize="sm">
            Delete
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductsCard;
