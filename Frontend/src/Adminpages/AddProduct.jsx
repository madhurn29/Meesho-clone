import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AdminNavbar from "./AdminNavbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/AdminRedux/action";
import { Product } from "../Components/ProductPage/Product";

const AddProduct = () => {
  const [data, setData] = useState({
    images: "",
    title: "",
    category: "",
    price: "",
    rating: "",
    reviews: "",
    delivery: "",
  });
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(data));
    // handle form submission here

    setIsSubmitting(true);
    setTimeout(() => {
      // enable the submit button
      setIsSubmitting(false);

      toast.success("The item has been successfully added.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <>
      <AdminNavbar />
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        mx="auto"
        boxShadow="md"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Image Link</FormLabel>
            <Input
              type="text"
              name="images"
              value={data.images}
              onChange={handleChange}
              size="lg"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              size="lg"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Category</FormLabel>
            <Select name="category" onChange={handleChange} size="lg">
              <option value="">Select a category</option>
              <option value="mens">Mens</option>
              <option value="womensEthnic">Womens Ethnic</option>
              <option value="womensWestern">Womens Western</option>
              <option value="kids">Kids</option>
              <option value="makeup">Makeup</option>
              <option value="kitchen">Home and Kitchen</option>
            </Select>
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Price</FormLabel>
            <Input
              type="text"
              name="price"
              value={data.price}
              onChange={handleChange}
              size="lg"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Rating</FormLabel>
            <Input
              type="text"
              name="rating"
              value={data.rating}
              onChange={handleChange}
              size="lg"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Reviews</FormLabel>
            <Input
              type="text"
              name="reviews"
              value={data.reviews}
              onChange={handleChange}
              size="lg"
              focusBorderColor="pink.500"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Delivery Type</FormLabel>
            <Select name="deliveryType" onChange={handleChange} size="lg">
              <option value="">Select a delivery type</option>
              <option value="Free Delivery">Free Delivery</option>
              <option value="Paid Delivery">Paid Delivery</option>
            </Select>
          </FormControl>
          <Button mt="4" colorScheme="blue" type="submit" size="lg" w="full">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <ToastContainer />
        </form>
      </Box>
    </>
  );
};

export default AddProduct;
