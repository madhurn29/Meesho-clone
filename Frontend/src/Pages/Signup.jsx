import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { postRegisterRequest } from "../Redux/AuthRedux/action";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleSendOtp = () => {
    let obj = { firstName, lastName, phoneNo };
    if (phoneNo.length === 10 && firstName && lastName) {
      dispatch(postRegisterRequest(obj)).then((res) => {
        console.log("from signup", res.data);
        const { firstName, lastName, phoneNo, OTP } = res.data;
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("phoneNo", phoneNo);
        localStorage.setItem("OTP", OTP);
        navigate("/otp");
      });
    } else {
      toast({
        title: "Enter valid data",
        description:
          "Please check your mobile number, first name and last name",
        position: "top",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }

    // toast(
    //   {
    //     title: "OTP sent on your mobile number",
    //     description: `Please enter your otp to proceed ${otp}`,
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   },

    //   localStorage.setItem("login", true),
    //   navigate("/otp-page")
    // );
  };

  return (
    <Box>
      <Navbar />
      <Box bgColor={"rgb(253, 237, 236)"} p={"50px"}>
        <Box
          w={"431px"}
          border={"1px solid rgb(223, 223, 223)"}
          m={"auto"}
          borderRadius={"5px"}
          bgColor={"white"}
        >
          <Stack>
            <Image
              borderTopRadius={"5px"}
              w={"431px"}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
            />
          </Stack>
          {/* MObile Number */}
          <Stack mt={"20px"} p={"20px"}>
            <Heading fontSize={"2xl"}>Sign Up to view your profile</Heading>
            <InputGroup>
              <InputLeftAddon
                children="First Name"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                bgColor={"white"}
                borderRadius={"0"}
                mr={"10px"}
              />
              <Input
                placeholder="Enter your First name"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                borderRadius={"0"}
                borderBottom={"3px solid rgb(223, 223, 223)"}
                focusBorderColor={"white"}
                mb={"20px"}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                children="Last Name"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                bgColor={"white"}
                borderRadius={"0"}
                mr={"10px"}
              />
              <Input
                placeholder="Enter your Last name"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                borderRadius={"0"}
                borderBottom={"3px solid rgb(223, 223, 223)"}
                focusBorderColor={"white"}
                mb={"20px"}
                onChange={(e) => setLastname(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                children="Mob : +91"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                bgColor={"white"}
                borderRadius={"0"}
                mr={"10px"}
              />
              <Input
                type="number"
                placeholder="phone number"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                borderRadius={"0"}
                borderBottom={"3px solid rgb(223, 223, 223)"}
                focusBorderColor={"white"}
                mb={"20px"}
                pattern="[0-9]"
                // isDisabled={phoneNo.length === 10}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </InputGroup>
            <Button
              textAlign={"center"}
              bgColor="rgb(244, 51, 151)"
              variant="outline"
              color={"white"}
              width={"100%"}
              _hover={{ bg: "rgb(199, 60, 157)" }}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
            <Text m={" auto"}>
              Already have an account? Login{" "}
              <Link style={{ color: "blue" }} to={"/login"}>
                here
              </Link>
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
