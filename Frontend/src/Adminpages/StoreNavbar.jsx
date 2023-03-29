import { useState } from "react";
import {
  Flex,
  Box,
  Link,
  Text,
  Select,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const StoreNavbar = () => {
  const [selectedOption, setSelectedOption] = useState("lowToHigh");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      color="black"
    >
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={8}>
          <Link as={ReactLink} to="/men" _hover={{ textDecoration: "none" }}>
            Men
          </Link>
          <Link as={ReactLink} to="/makeup" _hover={{ textDecoration: "none" }}>
            Makeup
          </Link>
          <Link as={ReactLink} to="/kids" _hover={{ textDecoration: "none" }}>
            Kids
          </Link>
          <Link
            as={ReactLink}
            to="/women/ethentic"
            _hover={{ textDecoration: "none" }}
          >
            Women - Ethentic
          </Link>
          <Link as={ReactLink} to="/women/western" _hover={{ color: "" }}>
            Women - Western
          </Link>
          <Link
            as={ReactLink}
            to="/home-kitchen"
            _hover={{ textDecoration: "none" }}
          >
            Home & Kitchen
          </Link>
        </HStack>
      </Box>

      <Box>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          icon={<ChevronDownIcon />}
          bg="white"
          color="teal.500"
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default StoreNavbar;
