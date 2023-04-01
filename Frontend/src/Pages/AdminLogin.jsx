import {
  Box,
  Heading,
  Image,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function AdminLogin() {
  // const navigate = useNavigate();
  // const toast = useToast();
  // const [user, setUser] = useState([]);
  // const [mobile, setMobile] = useState("");

//   function verifyUsers(mobile) {
//     axios
//       .get(`https://63cd0ca00f1d5967f028fa8e.mockapi.io/admin?search=${mobile}`)
//       .then((res) => {
//         setUser(res.data);
//         localStorage.setItem("id", res.data[0].id);
//       });
//   }

  // useState(() => {
  //   verifyUsers(mobile);
  // }, [mobile]);
  // console.log(user);
  return (
    <Box>
      <Navbar />
      <Box
        bgColor={"rgb(253, 237, 236)"}
        height={"635px"}
      
        pt={"50px"}
      >
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
            <Heading fontSize={"2xl"}>Admin Login</Heading>
            <Text
              color={"rgb(166, 153, 153)"}
              fontWeight={"light"}
              fontSize={"sm"}
              cursor={"pointer"}
              // onClick={() => setMobile("")}
            >
              Change Number
            </Text>
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
                // value={mobile}
                // isDisabled={mobile.length === 10}
                // onChange={(e) => {
                //   setMobile(e.target.value);
                //   console.log(mobile);
                //   verifyUsers(mobile);
                // }}
              />
            </InputGroup>
            <Button
              textAlign={"center"}
              bgColor="rgb(244, 51, 151)"
              variant="outline"
              color={"white"}
              width={"100%"}
              _hover={{ bg: "rgb(199, 60, 157)" }}
              // onClick={() => {
              //   localStorage.setItem("login", true);
              //   user.length === 1
              //     ? toast(
              //         {
              //           title: "Welcome to Admin's Dashboard",
              //           status: "success",
              //           duration: 6000,
              //           isClosable: true,
              //           position: "top",
              //         },
              //         navigate("/profile/Admin")
              //       )
              //     : toast({
              //         title: "Invalid Mobile Number",
              //         description: `no user found please signup`,
              //         status: "error",
              //         duration: 3000,
              //         isClosable: true,
              //         position: "bottom",
              //       });
              // }}
            >
              Go to Dashboard
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
export default AdminLogin;
