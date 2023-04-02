import {
  Box,
  Image,
  Button,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer";

const Thankyou = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="500px"
        >
          <AlertIcon boxSize="50px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="xl">
            Payment Successfull !
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for ordering from <b>Shop Vibes</b>.
            <br />
          </AlertDescription>
          <Image
            src="https://media3.giphy.com/media/TIeTxUeyPeFI771jTF/200w.webp?cid=ecf05e47q425vhaxgbayqm17i3thub0p958efllafgzy34uv&rid=200w.webp&ct=g"
            alt="Thank you"
            marginTop={5}
          ></Image>
        </Alert>
      </Box>
      <Center margin={"3% 0 2% 0"}>
        <Link to="/">
          <Button
            bg={"#f43297"}
            color={"white"}
            w={"100"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Continue Shopping ..
          </Button>
        </Link>
      </Center>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Thankyou;
