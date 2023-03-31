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
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AdminNavbar from "./AdminNavbar";

const AddProduct = () => {
  return (
    <>
      <AdminNavbar />
      <Box border={"1px solid re"}>
        <Box>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admin</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Add Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box
          m={"auto"}
          border={"1px solid re"}
          width={"50%"}
          p={"15px"}
          boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        >
          <FormControl width={"100%"} as={"fieldset"}>
            <FormLabel>Image Link</FormLabel>
            <Input name="images" />

            <FormLabel>Title</FormLabel>
            <Input name="name" />
            <Box display={"flex"} mt={"5px"}>
              <FormLabel>Select Category</FormLabel>
              <Select
                placeholder="Category"
                // bg="#ffa711"
                w={{ lg: "30%" }}
              >
                <option value="men-jeans">Mens-Jeans</option>
                <option value="men-t-shirts">Mens T-Shirt</option>
                <option value="women-kurtas-suits">Womens Kurta Suits</option>
                <option value="women-tops">Womens Tops</option>
              </Select>
            </Box>
            <FormLabel>Brand</FormLabel>
            <Input name="brand_name" />

            <FormLabel>Description</FormLabel>
            <Input name="product_details" />

            <FormLabel>Mrp</FormLabel>
            <Input name="price.mrp" type={"number"} />
            <FormLabel>Special Price</FormLabel>
            <Input name="price.sp" type={"number"} />
            <Box display={"flex"} gap={"5px"} mt={"10px"}>
              <FormLabel>Rating</FormLabel>

              <Input name="customer_rating" type={"number"} />
              <FormLabel>Quantity</FormLabel>
              <Input name="quantity" type={"number"} />
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} mt="10px">
              <Button colorScheme={"green"}>Add Product</Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
