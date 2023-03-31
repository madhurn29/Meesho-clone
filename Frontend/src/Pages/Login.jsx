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
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

//   import { OTPcontext } from "../context/OTPcontext";

function Login() {
  const navigate = useNavigate();
  // const { manageOTP } = useContext(OTPcontext);
  const toast = useToast();
  const otp = Math.random().toString().substr(2, 6);
  const [user, setUser] = useState([]);
  const [mobile, setMobile] = useState("");
  const [verified, setVerified] = useState(false);

  // function verifyUsers(mobile) {
  //   axios
  //     .get(
  //       `https://63ca9c80f36cbbdfc75c5b52.mockapi.io/meesho_users?search=${mobile}`
  //     )
  //     .then((res) => {
  //       setUser(res.data);
  //       localStorage.setItem("id", res.data[0].id);
  //     });
  // }

  // useState(() => {
  //   verifyUsers(mobile);
  // }, [mobile]);
  // console.log(user);
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
            {mobile.length > 9 && (
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
                value={mobile}
                isDisabled={mobile.length === 10}
                onChange={(e) => {
                  setMobile(e.target.value);
                  console.log(mobile);
                  // verifyUsers(mobile);
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
              onClick={() => {
                if (mobile.length === 0) {
                  toast({
                    title: "Enter Mobile Number to proceed",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "bottom",
                  });
                } else {
                  localStorage.setItem("login", true);
                  setTimeout(() => {
                    user.length === 1
                      ? toast(
                          {
                            title: "OTP sent on your mobile number",
                            description: `Please enter your otp to proceed ${otp}`,
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                          },
                          // manageOTP(otp),
                          navigate("/otp-page")
                        )
                      : toast(
                          {
                            title: "Invalid Mobile Number",
                            description: `no user found please signup`,
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                            position: "bottom",
                          },
                          // manageOTP(otp)
                        );
                  }, 1000);
                }
              }}
            >
              Send OTP
            </Button>
            <Text m={"auto"}>
              Don't have a account yet? signup
              <Link
                style={{ color: "blue", marginLeft: "5px" }}
                to={"/signup"}
              >
                here
              </Link>
            </Text>
            <Text m={"auto"}>
              <Link
                style={{ color: "blue", marginLeft: "5px" }}
                to={"/admin-login"}
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
