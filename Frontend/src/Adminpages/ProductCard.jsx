import { Box, Text, Button, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  handleHomeDelete,
  handleHomeEdit,
  handleKidEdit,
  handleKidsDelete,
  handleMakeupDelete,
  handleMakeupEdit,
  handleMenDelete,
  handleMenEdit,
  handleWomenEthDelete,
  handleWomenEthEdit,
  handleWomenWestDelete,
  handleWomenWestEdit,
} from "./AllHandles";
import { DeleteButton, EditButton } from "./EditButton";

import EditProductModal from "./EditProductModal";

const ProductCard = ({
  product,
  category,
  setIsLoading,
  setProducts,
  setCategory,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDelete = () => {
    if (category === "men") {
      handleMenDelete(product.id, setIsLoading, setProducts, setCategory);
    } else if (category === "women") {
      handleWomenEthDelete(product.id, setIsLoading, setProducts, setCategory);
    } else if (category === "women-west") {
      handleWomenWestDelete(product.id, setIsLoading, setProducts, setCategory);
    } else if (category === "kids") {
      handleKidsDelete(product.id, setIsLoading, setProducts, setCategory);
    } else if (category === "makeup") {
      handleMakeupDelete(product.id, setIsLoading, setProducts, setCategory);
    } else if (category === "home") {
      handleHomeDelete(product.id, setIsLoading, setProducts, setCategory);
    }
  };
  const handleEdit = (data) => {
    if (category === "men") {
      handleMenEdit(product.id, setIsLoading, setProducts, setCategory, data);
    } else if (category === "women") {
      handleWomenEthEdit(
        product.id,
        setIsLoading,
        setProducts,
        setCategory,
        data
      );
    } else if (category === "women-west") {
      handleWomenWestEdit(
        product.id,
        setIsLoading,
        setProducts,
        setCategory,
        data
      );
    } else if (category === "kids") {
      handleKidEdit(product.id, setIsLoading, setProducts, setCategory, data);
    } else if (category === "makeup") {
      handleMakeupEdit(
        product.id,
        setIsLoading,
        setProducts,
        setCategory,
        data
      );
    }
    if (category === "home") {
      handleHomeEdit(product.id, setIsLoading, setProducts, setCategory, data);
    }
  };

  return (
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
          height="330px"
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
      <Box mt="2" display="flex" alignItems="center">
        <Box as="span" fontWeight="bold" color="teal.500" mr="2">
          {product.price}
        </Box>
        <Box mr="2">
          <EditButton onOpen={onOpen} />
        </Box>
        <Box>
          <DeleteButton handleDelete={handleDelete} />
        </Box>
      </Box>
      <EditProductModal
        product={product}
        onSubmit={handleEdit}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default ProductCard;
