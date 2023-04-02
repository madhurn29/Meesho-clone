import React from "react";
import { useContext } from "react";
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Image, Input, Button, Grid, } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import meesho from "../Images/meesho.png";
import { Link, useNavigate } from "react-router-dom";
import { MdInstallMobile } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import styles from "./navbar.module.css"

const Navbar = (props) => {
  const navigate = useNavigate()
  let firstname = localStorage.getItem("firstName") || ""
  let lastname = localStorage.getItem("lastName") || ""
  let phoneNo = localStorage.getItem("phoneNo") || ""

  const inputRef = React.useRef(null);

  const handleInputChange = (event) => {
    setTimeout(() => {
      props.handleInputChange(event.target.value);
    }, 3000);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Theme, } = useContext(AppContext);
  const light = {
    backgroundColor: "white",
    color: "black",
  };
  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const handlelogout = () => {
    localStorage.clear()
    navigate("/")
  }
  const handlesignup = () => {
    navigate("/signup")
  }
  return (
    <>
      <Box zIndex={9} borderBottom={"1px solid rgb(223,223,223)"} position={"sticky"} top={0}>
        <Box
          borderBottom={"1px solid rgb(223,223,223)"}
          py={"4px"}

          w="100%"
          style={Theme === "light" ? light : dark}
          padding={"10px"}
        >
          <Flex justifyContent={"space-between"} gap="10px">
            <IconButton
              style={Theme === "light" ? light : dark}
              size="lg"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              marigin-top="15px"
              onClick={isOpen ? onClose : onOpen}
            />

            <Flex
              justifyContent={"space-around"}
              alignItems="center"
              w="95%"
              m={"auto"}
              gap="100px"
            >

              <Flex width={{ base: "100%", sm: "70%" }} gap={{ base: "20px", sm: "40px" }} alignItems={"center"} >

                {/* logo */}
                <Link to="/">
                  <Image

                    width={"100%"}
                    src={meesho}
                  // objectFit={"cover"}
                  />
                </Link>

                {/* searchbar */}
                <Flex width={"100%"} gap="10px" border={"1px solid grey"} borderRadius="5px">
                  {/* serchicon */}
                  <Search2Icon color="grey" margin={"12px 0px 0px 10px"} />
                  {/* Input model */}
                  <Popover padding="auto">
                    <PopoverTrigger>
                      <Button color={"none"} colorScheme="none" width="100%">

                        <Input
                          onChange={handleInputChange}
                          ref={inputRef}
                          variant="unstyled"
                          placeholder={`Try Saree,Kurta or Search by product code`}
                          width="100%"
                          ml={{ base: "-20px", sm: "0px" }}

                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />

                      <PopoverHeader>Popular Searches</PopoverHeader>
                      <PopoverBody>
                        <Grid templateColumns={"repeat(3, 1fr)"} gap="10px">
                          <Text
                            border="1px solid black"
                            borderRadius={"10px"}
                            paddng="3px"
                            padding="5px"
                          >
                            smartphones
                          </Text>
                          <Text
                            border="1px solid black"
                            borderRadius={"10px"}
                            paddng="3px"
                            padding="5px"
                          >
                            skincare
                          </Text>
                          <Text colorScheme={"red"}
                            border="1px solid black"
                            borderRadius={"10px"}
                            paddng="3px"
                            padding="5px"
                          >
                            groceries
                          </Text>
                          <Text
                            border="1px solid black"
                            borderRadius={"10px"}
                            paddng="3px"
                            padding="5px"
                          >
                            furniture
                          </Text>
                          <Text
                            border="1px solid black"
                            borderRadius={"10px"}
                            paddng="3px"
                            padding="5px"
                          >
                            tops
                          </Text>
                        </Grid>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  {/* <Input variant='unstyled' placeholder={`Try Saree,Kurta or Search by product code`} /> */}
                </Flex>

              </Flex>

              <Flex

                as={"nav"}
                display={{ base: "none", md: "flex" }}
                gap="23px"
                w={{ base: "", md: "30%", lg: "50%" }}
                justifyContent="space-around"
                alignItems="center"
              >
                {/* Dowload button */}
                <Box cursor="pointer" className={styles.bigblue} >
                  <Popover>
                    <PopoverTrigger>
                      <Flex gap='10px'><MdInstallMobile fontSize={"20px"} /> Download App</Flex>
                    </PopoverTrigger>
                    <PopoverContent width={"200px"}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Download From </PopoverHeader>
                      <PopoverBody>
                        <Box justifyContent={"space-around"}>
                          <Image
                            width="200px"
                            src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                          />
                        </Box>
                      </PopoverBody>
                      <hr />
                      <PopoverBody>
                        <Box justifyContent={"space-around"}>
                          <Image
                            width="200px"
                            src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                          />
                        </Box>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>

                <Text height="50px" border={"1px solid rgb(223,223,223)"}></Text>

                <Text className={styles.bigblue} cursor="pointer">Become a Supplier </Text>

                <Text height="50px" border={"1px solid rgb(223,223,223)"}></Text>

                {/* Profile button */}
                <Box cursor="pointer" zindex={1}>
                  {firstname || lastname ?

                    <Popover position="relative" zIndex={9}>
                      {/* logout button */}
                      <PopoverTrigger>
                        <Box className={styles.bigblue} alignItems={"center"}>
                          <BiUser fontSize={"25px"} />
                          <Text marginLeft="-10px">Profile</Text>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent width={"200px"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Manage Account</PopoverHeader>
                        <PopoverBody>
                          <Flex>
                            <Box>
                              <Box marginTop={"10px"}> <BiUser fontSize={"35px"} margin="10px 0px 0px 10px" /></Box>
                            </Box>
                            <Box marginLeft="10px">
                              <Text>{firstname} {lastname}</Text>
                              <Text>{phoneNo}</Text>
                            </Box>
                          </Flex>
                        </PopoverBody>

                        <PopoverBody>My Orders</PopoverBody>
                        <hr />
                        <PopoverBody>
                          <Button onClick={handlelogout} colorScheme={"pink"}>Log Out</Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover> :

                    <Popover position="relative" zIndex={9}>
                      {/* signup button */}
                      <PopoverTrigger>
                        <Box alignItems={"center"}>
                          <BiUser fontSize={"25px"} />
                          <Text className={styles.bigblue} marginLeft="-10px">Profile</Text>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent width={"200px"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          <Box>
                            <Flex>
                              <Box> <BiUser fontSize={"25px"} /></Box>
                            </Flex>
                            <Text>Hello User </Text>
                            <Text fontSize={"12px"}>To access your Meesho account</Text>
                          </Box>
                        </PopoverHeader>


                        <PopoverBody>



                          <Button onClick={handlesignup} width="100%" colorScheme={"pink"}>SignIn</Button>

                        </PopoverBody>

                        <hr />
                        <PopoverBody>My Orders</PopoverBody>

                      </PopoverContent>
                    </Popover>}

                </Box>

                <Link className={styles.bigblue} to="/cart" cursor="pointer">
                  <AiOutlineShoppingCart fontSize={"25px"} />
                  Cart
                </Link>
              </Flex>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box
              pb={4}
              display={{ md: "none" }}
              style={Theme === "light" ? light : dark}
            >
              <Stack as={"nav"} spacing={4} fontWeight="400">
                <Link className={styles.bigblue} to="/womensEthenic" cursor="pointer"> Women Ethnic</Link>
                <Link className={styles.bigblue} to="/womensWestern" cursor="pointer">Women Western</Link>
                <Link className={styles.bigblue} to="/mens" cursor="pointer">Men</Link>
                <Link className={styles.bigblue} to="/kids" cursor="pointer">Kids</Link>
                <Link className={styles.bigblue} to="/kitchen" cursor="pointer">Home & Kitchen</Link>
                <Link className={styles.bigblue} to="/makeup" cursor="pointer">Beauty & Health</Link>
                <Link className={styles.bigblue} to="/jwellery" cursor="pointer">Jewellery & Accessories </Link>
                <Link className={styles.bigblue} to="/bags" cursor="pointer">Bags & Footwear</Link>
                <Link className={styles.bigblue} to="/electronics" cursor="pointer">Electronics</Link>
                <Link className={styles.bigblue} to="/signup" cursor="pointer">SignUp</Link>

              </Stack>
            </Box>
          ) : null}
        </Box>

        <Flex
          zIndex={1}
          style={Theme === "light" ? light : dark}
          width={"100%"}
          margin="auto"
          display={{ base: "none", md: "flex", lg: "flex" }}
          gap="14px"
          padding={"20px"}
          justifyContent="space-around"
          alignItems="center"
        >
          <Link className={styles.bigblue} to="/womensEthenic" cursor="pointer"> Women Ethnic</Link>
          <Link className={styles.bigblue} to="/womensWestern" cursor="pointer">Women Western</Link>
          <Link className={styles.bigblue} to="/mens" cursor="pointer">Men</Link>
          <Link className={styles.bigblue} to="/kids" cursor="pointer">Kids</Link>
          <Link className={styles.bigblue} to="/kitchen" cursor="pointer">Home & Kitchen</Link>
          <Link className={styles.bigblue} to="/makeup" cursor="pointer">Beauty & Health</Link>
          <Link className={styles.bigblue} to="/jwellery" cursor="pointer">Jewellery & Accessories </Link>
          <Link className={styles.bigblue} to="/bags" cursor="pointer">Bags & Footwear</Link>
          <Link className={styles.bigblue} to="/electronics" cursor="pointer">Electronics</Link>

        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
