import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  PinInputField,
  PinInput,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { validateOtp } from "../Redux/AuthRedux/action";

function OTP() {
  const [timer, setTimer] = useState(false);
  const [otpNumber, setOtpNumber] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const isLoading = useSelector((store) => {
    return store.AuthReducer.isLoading;
  });

  useEffect(() => {
    toast({
      title: `OTP sent to your mobile number ${localStorage.getItem(
        "phoneNo"
      )}`,
      description: `OTP is ${localStorage.getItem("OTP")}`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }, []);

  const handleTimer = () => {
    setTimer(false);
  };
  const handlePinChange = (e) => {
    const { value, name } = e.target;
    const newPin = otpNumber.slice(0, name) + value + otpNumber.slice(name + 1);
    setOtpNumber(newPin);
  };
  
  const verify = () => {
    let obj = {
      phoneNo: Number(localStorage.getItem("phoneNo")),
      tempOtp: Number(otpNumber),
    };
    
    dispatch(validateOtp(obj)).then((res) => {
      if (res) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("UserLogin", true);
        toast({
          title: "Account Created Successfully",
          description: `Welcome to Shop Vibes`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setOtpNumber("");
        navigate("/");
      } else {
        toast({
          title: "Please Check your OTP",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });

        setOtpNumber("");
      }
    });
  };

  return (
    <Box>
      <Navbar />
      <Box bgColor={"rgb(253, 237, 236)"} height={"635px"} p={"50px"}>
        <Box
          w={{ sm: "300px", md: "431px" }}
          border={"1px solid rgb(223, 223, 223)"}
          m={"auto"}
          borderRadius={"5px"}
          bgColor={"white"}
        >
          <Stack>
            <Image
              borderTopRadius={"5px"}
              w={{ sm: "300px", md: "431px" }}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
            />
          </Stack>
          {/* MObile Number */}
          <Stack mt={"20px"} h={"308px"} p={"20px"}>
            <Heading fontSize={"2xl"}>Enter OTP</Heading>

            <HStack m={"auto"}>
              <PinInput value={otpNumber} type="number" onChange={setOtpNumber}>
                <PinInputField name="0" onChange={handlePinChange} />
                <PinInputField name="1" onChange={handlePinChange} />
                <PinInputField name="2" onChange={handlePinChange} />
                <PinInputField name="3" onChange={handlePinChange} />
                <PinInputField name="4" onChange={handlePinChange} />
                <PinInputField name="5" onChange={handlePinChange} />
              </PinInput>
            </HStack>
            <Button
              textAlign={"center"}
              bgColor="rgb(244, 51, 151)"
              variant="outline"
              color={"white"}
              width={"100%"}
              _hover={{ bg: "rgb(199, 60, 157)" }}
              onClick={verify}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
            {timer || (
              <Text
                color={"rgb(246, 93, 151)"}
                onClick={() => {
                  toast({
                    title: `OTP sent to your mobile number ${localStorage.getItem(
                      "phoneNo"
                    )}`,
                    description: `OTP is ${localStorage.getItem("OTP")}`,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                  setTimer(!timer);
                }}
                cursor={"pointer"}
                fontWeight={"bold"}
              >
                Resend OTP
              </Text>
            )}
            {timer && <Timer handleTimer={handleTimer} />}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default OTP;

export function Timer({ handleTimer }) {
  const [count, setCount] = React.useState(59);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          handleTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const clear = () => {
      clearInterval(interval);
      handleTimer();
    };
    return clear;
  }, []);
  return (
    <Box>
      <Text color={"rgb(166, 153, 153)"} fontWeight={"light"} fontSize={"sm"}>
        resend in {count} s
      </Text>
    </Box>
  );
}
