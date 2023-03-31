import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  Link,
  Text,
  Select,
  HStack,
  Spacer,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import ProductCard from "./ProductCard";
import {
  handleHomeGet,
  handleKidsGet,
  handleMakaupGet,
  handleMenGet,
  handleWomenEthGet,
  handleWomenWestGet,
} from "./AllHandles";
import LoadingPage from "./LoadingPage";

const StoreNavbar = () => {
  const [selectedOption, setSelectedOption] = useState("lowToHigh");

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("men");
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(true);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    handleMenGet(setIsLoading, setProducts, setCategory);
  }, []);
  console.log(products);

  return (
    <Box>
      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Admin</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Store</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: 2, md: 4 }}
        color="black"
        wrap="wrap"
      >
        <Box>
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            onClick={onOpen}
            display={{ md: "none" }}
          />
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleMenGet(setIsLoading, setProducts, setCategory)
              }
            >
              Men
            </Text>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleWomenEthGet(setIsLoading, setProducts, setCategory)
              }
            >
              Women - Ethentic
            </Text>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleWomenWestGet(setIsLoading, setProducts, setCategory)
              }
            >
              Women - Western
            </Text>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleKidsGet(setIsLoading, setProducts, setCategory)
              }
            >
              Kids
            </Text>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleMakaupGet(setIsLoading, setProducts, setCategory)
              }
            >
              Makeup
            </Text>
            <Text
              sx={{
                position: "relative",
                transition: "color 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#38b2ac",
                  transition: "width 0.4s ease-in-out",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#38b2ac",
                },
              }}
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                handleHomeGet(setIsLoading, setProducts, setCategory)
              }
            >
              Home &amp; Kitchen
            </Text>
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
      <Box width="90%" m="auto">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={8}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={category}
                setProducts={setProducts}
                setIsLoading={setIsLoading}
                setCategory={setCategory}
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};
export default StoreNavbar;
