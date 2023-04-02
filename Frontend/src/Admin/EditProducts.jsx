import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../Redux/AdminRedux/action";

const EditProducts = () => {
  const { _id } = useParams();

  const product = useSelector((store) => {
    return store.adminReducer.products;
  });

  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newData = {
      image: data.images,
      price: data.price,
      title: data.title,
    };
    dispatch(editProduct(_id, newData));
  };

  useEffect(() => {
    const productData = product.find((el) => el._id === _id);

    productData &&
      setData({
        ...productData,
        image: productData.images,
        price: productData.price,
      });
  }, []);

  return (
    <>
      <Card maxWidth="600px" mx="auto" my="50px" p={8} boxShadow="lg">
        <Image src={data.images} />
        <Heading as="h6" mb={2}>
          Price:
        </Heading>
        <Input
          placeholder="price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <Heading as="h4" mb={2}>
          Title:
        </Heading>
        <Input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <Heading as="h4" mb={2}>
          Image URL:
        </Heading>
        <Input
          value={data.images}
          onChange={(e) => setData({ ...data, images: e.target.value })}
        />
        <Button onClick={handleEdit} mt={4} variantColor="teal">
          Submit
        </Button>
      </Card>
    </>
  );
};

export default EditProducts;
