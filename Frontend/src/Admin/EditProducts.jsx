import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Heading,
  Image,
  Input,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../Redux/AdminRedux/action";
import axios from "axios";
import AdminNavbar from "../Adminpages/AdminNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProducts = () => {
  const { id } = useParams();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newData = {
      image: data.images,
      price: data.price,
      title: data.title,
      rating: data.rating,
      delivery: data.delivery,
      category: data.category,
      reviews: data.reviews,
    };
    dispatch(editProduct(id, newData));

    setIsSubmitting(true);
    setTimeout(() => {
      // enable the submit button
      setIsSubmitting(false);

      toast.success("The item has been updated.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 3000);
  };

  useEffect(() => {
    axios
      .get(`https://long-lime-fly-tux.cyclic.app/products/${id}`)
      .then((res) => {
        setData(res.data.products);
        console.log(res.data.products);
      });
  }, []);
  console.log(data);
  return (
    <>
      <AdminNavbar />
      <Flex
        maxW="3xl"
        mx="auto"
        my="50px"
        p={4}
        boxShadow="xl"
        borderRadius="md"
        backgroundColor="beige"
      >
        <Box w="30%">
          <Image src={data.images} w="100%" borderRadius="md" />
        </Box>
        <Box w="70%" pl={4}>
          <Heading as="h4" fontSize="md" fontWeight="bold" mb={2}>
            TITLE
          </Heading>
          <Input
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            borderRadius="md"
            mb={4}
          />
          <Heading as="h6" fontSize="sm" fontWeight="bold" mb={2}>
            PRICE
          </Heading>
          <Input
            placeholder="Price"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            borderRadius="md"
            mb={4}
          />
          <Heading as="h4" fontSize="md" fontWeight="bold" mb={2}>
            IMAGE URL
          </Heading>
          <Input
            value={data.images}
            onChange={(e) => setData({ ...data, images: e.target.value })}
            borderRadius="md"
            mb={4}
          />
          <Heading as="h4" fontSize="md" fontWeight="bold" mb={2}>
            RATING
          </Heading>
          <Input
            value={data.rating}
            onChange={(e) => setData({ ...data, rating: e.target.value })}
            borderRadius="md"
            mb={4}
          />
          <Heading as="h4" fontSize="md" fontWeight="bold" mb={2}>
            REVIEWS
          </Heading>
          <Input
            value={data.reviews}
            onChange={(e) => setData({ ...data, reviews: e.target.value })}
            borderRadius="md"
            mb={4}
          />
          <Button
            onClick={handleEdit}
            bg="teal.500"
            color="white"
            _hover={{ bg: "teal.600" }}
            borderRadius="md"
            mt={4}
            w="100%"
            fontWeight="semibold"
            fontSize="sm"
          >
            {isSubmitting ? "UPDATING..." : "UPDATE"}
          </Button>
          <ToastContainer />
        </Box>
      </Flex>
    </>
  );
};

export default EditProducts;
