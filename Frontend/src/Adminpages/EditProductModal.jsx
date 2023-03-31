import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  Image,
  Box,
} from "@chakra-ui/react";

const EditProductModal = ({ product, isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState(product.title);
  const [rating, setRating] = useState(product.rating);
  const [reviews, setReviews] = useState(product.reviews);
  const [price, setPrice] = useState(product.price);
  const [imageLink, setImageLink] = useState(product.images);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedProduct = {
      id: product.id,
      title,
      rating,
      reviews,
      price,
      imageLink,
    };
    onSubmit(editedProduct);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="md">
        <ModalHeader textAlign="center" fontWeight="bold">
          Edit Product
        </ModalHeader>
        <ModalCloseButton />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image width="30%" src={imageLink} alt={title} objectFit="cover" />
        </Box>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Reviews</FormLabel>
              <Input
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Price</FormLabel>
              <Input value={price} onChange={(e) => setPrice(e.target.value)} />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Image Link</FormLabel>
              <Input
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit} colorScheme="green">
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditProductModal;
