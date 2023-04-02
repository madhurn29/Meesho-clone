import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Badge,
  List,
  ListItem,
  Button,
  Hide,
  Toast,
  useToast,
  Skeleton,
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoPricetagsOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowRightIcon,
  EmailIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { BsArrowReturnLeft, BsCartDash, BsCash } from "react-icons/bs";
import { ProductList } from "./ProductList";
import { PeopleAlsoLike } from "./PeopleAlsoLike";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SingleLoader() {
  return (
    <Box>
      <Navbar />
      <Skeleton>
        <Box>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box w="70%" borderRadius="4px">
                <Flex>
                  <Image
                    border={"1px solid #C2C2C2"}
                    w={"100%"}
                    margin="auto"
                    alt={"feature image"}
                    src="#"
                  />
                </Flex>
                <Stack direction="row" spacing={4} ml="40px" mt={"20px"}>
                  <Button
                    leftIcon={<BsCartDash />}
                    bg="#F43397"
                    color={"white"}
                    variant="solid"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    rightIcon={<ArrowRightIcon />}
                    color={"#F43397"}
                    borderColor="#F43397"
                    variant="outline"
                  >
                    Buy Now
                  </Button>
                </Stack>
              </Box>
              <Stack spacing="4">
                <Card>
                  <CardHeader>
                    <Heading size="md" color="gray">
                      {"#"}
                    </Heading>
                    <Text color="black.600" fontSize="2xl" fontWeight="bold">
                      ₹'#'
                    </Text>
                    <Badge
                      mt={"15px"}
                      borderRadius="full"
                      px="2"
                      fontSize="md"
                      color={"white"}
                    >
                      {"#"}
                      <StarIcon color={"white"} height={"10px"} />
                    </Badge>
                  </CardHeader>
                  <CardBody>
                    <Badge mt="-30px" color="gray">
                      Free Delivery
                    </Badge>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <Heading size="md" color="gray">
                      Select Size
                    </Heading>
                    <Stack direction="row">
                      <Box
                        w={"90px"}
                        border={"1px solid #F43397"}
                        borderColor="#F43397"
                        borderRadius="20px"
                        bgColor="#FDE9F2"
                      >
                        <Badge
                          mb={"4px"}
                          ml={"13px"}
                          color="#F43397"
                          bgColor="#FDE9F2"
                        >
                          Free Size
                        </Badge>
                      </Box>
                    </Stack>
                  </CardHeader>
                </Card>
                <Card>
                  <Box ml={"10px"}>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("black", "yellow.300")}
                      fontWeight={"bold"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Product Details
                    </Text>

                    <List spacing={2} color="gray">
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          Name:
                        </Text>{" "}
                        {"#"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          Fabric:
                        </Text>{" "}
                        Cotton Silk
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          Pattern:
                        </Text>{" "}
                        Solid
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Net Quantity (N):
                        </Text>{" "}
                        Single
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          rating:
                        </Text>{" "}
                        {"#"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          reviews:
                        </Text>{" "}
                        {"#"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          delivery:
                        </Text>{" "}
                        {"#"}{" "}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          Country of Origin:
                        </Text>{" "}
                        India{" "}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"} color="gray">
                          More Information
                        </Text>
                      </ListItem>
                    </List>
                  </Box>
                </Card>
                <Card>
                  <CardHeader>
                    <Heading size="md" color="gray">
                      Sold by
                    </Heading>
                    <Text size="md" color="gray">
                      ShopVibes Adda
                    </Text>
                    <Stack direction="column" spacing={4}>
                      <Button
                        leftIcon={<EmailIcon />}
                        bg="#F43397"
                        color={"white"}
                        variant="solid"
                      >
                        Email
                      </Button>
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        color={"#F43397"}
                        borderColor="#F43397"
                        variant="outline"
                      >
                        Call us
                      </Button>
                    </Stack>
                  </CardHeader>
                </Card>
                <Card bg={"#E7EEFF"}>
                  <CardBody direction="row" spacing={4}>
                    <Badge mt="-10px" ml="30px" direction="row" bg={"#E7EEFF"}>
                      <IoPricetagsOutline mt="-5px" mr={"4px"} bg={"#E7EEFF"} />
                      Lowest Price
                    </Badge>
                    <Badge bg={"#E7EEFF"} mt="-10px" ml="30px">
                      <BsCash mt="-5px" mr={"4px"} bg={"#E7EEFF"} />
                      Cash on Delivery
                    </Badge>
                    <Badge bg={"#E7EEFF"} mt="-10px" ml="30px">
                      <BsArrowReturnLeft bg={"#E7EEFF"} mt="-5px" mr={"4px"} />
                      Returns
                    </Badge>
                  </CardBody>
                </Card>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Skeleton>
      <Footer />
    </Box>
  );
}
