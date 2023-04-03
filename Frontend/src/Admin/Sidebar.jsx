import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Box,
  RadioGroup,
  Radio,
  Stack,
  VStack,
  Heading,
  Button,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.get("category");
  const initialOrder = searchParams.get("order");

  const [categories, setCategories] = useState(initialState || "");
  const [order, setOrder] = useState(initialOrder || "");

  const handleCategoryChange = (selected) => {
    setCategories(selected);
  };

  const handleSortPrice = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category: categories,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [categories, order]);

  return (
    // <Box
    //   bg="pink.100"
    //   p={4}
    //   borderRadius={8}
    //   boxShadow="md"
    //   position="fixed"
    //   left={0}
    //   top={20}
    // >
    //   <RadioGroup onChange={handleCategoryChange} value={categories} mb={4}>
    //     <Radio value="mens">Men's Clothing - Ethnic</Radio>
    //     <Radio value="womensEthenic">Women's Clothing - Ethnic</Radio>
    //     <Radio value="womensWestern">Women's Clothing - Western</Radio>
    //     <Radio value="kids">Kids Clothing</Radio>
    //     <Radio value="makeup">Makeup</Radio>
    //     <Radio value="kitchen">Home & Kitchen</Radio>
    //   </RadioGroup>
    //   <RadioGroup onChange={handlePriceChange} value={categories}>
    //     <Radio value="asc">Price Low To High- Ethnic</Radio>
    //     <Radio value="desc">Price High To Low- Ethnic</Radio>
    //   </RadioGroup>
    // </Box>
    <Box display="flex" flexDirection="row">
      <Box
        p={4}
        borderRadius={8}
        boxShadow="md"
        position={"left"}
        left={0}
        width="200px"
      >
        <Heading as="h3" size="md" mb={4}>
          Categories
        </Heading>
        <RadioGroup onChange={handleCategoryChange} value={categories} mb={4}>
          <Radio
            value="mens"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
          >
            <Text color="gray.600" fontSize="sm">
              Men's Clothing
            </Text>
          </Radio>

          <Radio
            value="womensEthenic"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
          >
            <Text color="gray.600" fontSize="sm">
              Women's - Ethnic
            </Text>
          </Radio>
          <Spacer size={"50px"} />
          <Radio
            value="womensWestern"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
          >
            <Text color="gray.600" fontSize="sm">
              Women's - Western
            </Text>
          </Radio>
          <br />
          <Radio
            value="kids"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
            colorScheme="blue"
          >
            <Text color="gray.600" fontSize="sm">
              Kids Clothing
            </Text>
          </Radio>
          <br />
          <Radio
            value="makeup"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
          >
            <Text color="gray.600" fontSize="sm">
              Makeup
            </Text>
          </Radio>
          <br />
          <Radio
            value="kitchen"
            _hover={{ backgroundColor: "red.500" }}
            _checked={{ backgroundColor: "teal.600" }}
          >
            <Text color="gray.600" fontSize="sm">
              Home & Kitchen
            </Text>
          </Radio>
        </RadioGroup>
        <Heading as="h5" size="md" mb={4}>
          Sort By Price
        </Heading>
        <RadioGroup defaultValue={order}>
          <Radio value="asc" onChange={handleSortPrice} name="order">
            <Text color="gray.600" fontSize="sm">
              Price Low To High
            </Text>
          </Radio>

          <Radio value="desc" onChange={handleSortPrice} name="order">
            <Text color="gray.600" fontSize="sm">
              Price High To Low
            </Text>
          </Radio>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;
