import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, getProduct } from "../Redux/AdminRedux/action";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const ProductsCard = ({ product, height, obj }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(DeleteProduct(product._id));
    dispatch(getProduct(obj));
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm delete</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this item permanently?
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="ghost" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          <Link to={`/editproduct/${product._id}`}>
            <Box
              as="button"
              ml="5"
              color="cyan.700"
              fontSize="xl"
              bg="red.50"
              transition="all 0.2s ease-in-out"
              _hover={{ transform: "scale(1.45)" }}
            >
              <MdModeEditOutline />
            </Box>
          </Link>

          <Box
            as="button"
            ml="2"
            color="red.700"
            fontSize="xl"
            bg="red.50"
            transition="all 0.2s ease-in-out"
            _hover={{ transform: "scale(1.45)" }}
            onClick={handleDelete}
          >
            <AiFillDelete />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductsCard;
