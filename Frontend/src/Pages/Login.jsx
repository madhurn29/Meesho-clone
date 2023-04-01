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

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { loginRequest } from "../Redux/AuthRedux/action";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [phoneNo, setMobile] = useState("");

  const handleSendOTP = () => {
    if (phoneNo.length < 10) {
      toast({
        title: "Enter Correct Mobile Number to proceed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      let obj = { phoneNo };
      dispatch(loginRequest(obj)).then((res) => {
        if (res) {
          const { phoneNo, firstName, lastName, OTP } = res.data;
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("phoneNo", phoneNo);
          localStorage.setItem("OTP", OTP);
          navigate("/otp");
        } else {
          toast({
            title: "Welcome, New User",
            description: `Please Sign Up First`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      });
    }
  };

  return (
    <Box>
      <Navbar />
      <Box bgColor={"rgb(253, 237, 236)"} height={"635px"} pt={"50px"}>
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
          <Stack mt={"20px"} h={"308px"} p={"20px"}>
            <Heading fontSize={"2xl"}>Log in</Heading>
            {phoneNo.length > 9 && (
              <Text
                color={"rgb(166, 153, 153)"}
                fontWeight={"light"}
                fontSize={"sm"}
                cursor={"pointer"}
                onClick={() => setMobile("")}
              >
                Change Number
              </Text>
            )}
            <InputGroup>
              <InputLeftAddon
                children="IN +91"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                bgColor={"white"}
                borderRadius={"0"}
                mr={"10px"}
              />
              <Input
                isRequired
                type="tel"
                placeholder="phone number"
                borderTop={"none"}
                borderLeft={"none"}
                borderRight={"none"}
                borderRadius={"0"}
                borderBottom={"3px solid rgb(223, 223, 223)"}
                focusBorderColor={"white"}
                value={phoneNo}
                isDisabled={phoneNo.length === 10}
                onChange={(e) => {
                  setMobile(e.target.value);

                }}
              />
            </InputGroup>
            <Button
              textAlign={"center"}
              bgColor="rgb(244, 51, 151)"
              variant="outline"
              color={"white"}
              width={"100%"}
              _hover={{ bg: "rgb(199, 60, 157)" }}
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>
            <Text m={"auto"}>
              Don't have a account yet? signup
              <Link style={{ color: "blue", marginLeft: "5px" }} to={"/signup"}>
                here
              </Link>
            </Text>
            <Text m={"auto"}>
              <Link
                style={{ color: "blue", marginLeft: "5px" }}
                to={"/adminlogin"}
              >
                Admins Here
              </Link>
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
