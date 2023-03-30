import React from 'react'

import { useContext } from 'react';
// import { BsCartPlus } from 'react-icons';
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Image, Input, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  // PopoverAnchor,
} from '@chakra-ui/react'
import { AppContext } from '../../Context/Theme';

import meesho from "../Images/meesho.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [value, setvalue] = React.useState("")
  // console.log('value: ', value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Theme, ToggleTheme } = useContext(AppContext)

  const light = {
    backgroundColor: 'white',
    color: 'black'
  }

  const dark = {
    backgroundColor: 'black',
    color: 'white'
  }
  // https://dummyjson.com/products/search?q=phone
  const handlevalue = (e) => {
    setvalue(e.target.value)
    setTimeout(() => {
      localStorage.setItem("value", e.target.value)
    }, 2000)
  }
  return (
    <>
      <Box>

        <Box position='fixed' w='100%' style={Theme === 'light' ? light : dark} shadow='lg' padding={"10px"}>

          <Flex justifyContent={'space-between'} gap="10px" >

            <IconButton style={Theme === 'light' ? light : dark}
              size='lg'
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />}
              aria-label='Open Menu'
              display={{ md: 'none' }}
              marigin-top="15px"
              boreder="1px solid blue" onClick={isOpen ? onClose : onOpen} />

            <Flex justifyContent={"space-between"} alignItems='center' w='95%' m={'auto'} gap="10px" >

              <Flex gap="10px">
                <Image h={{ base: '20px', md: '40px', lg: "40px" }} width={{ base: '100px', md: '140px', lg: "190px" }} src={meesho} />

                <Flex gap="10px" border={"1px solid grey"}>
                  <Search2Icon color="grey" margin={"5px"} />
                  <Popover>
                    <PopoverTrigger>
                      <Button color={"none"} colorScheme="none">  <Input onChange={handlevalue} variant='unstyled' placeholder={`Try Saree,Kurta or Search by product code`} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Recent Searches!</PopoverHeader>
                      <PopoverHeader>Popular Searches</PopoverHeader>
                      <PopoverBody>Saree , Tops , Kurtas,</PopoverBody>
                    </PopoverContent>
                  </Popover>
                  {/* <Input variant='unstyled' placeholder={`Try Saree,Kurta or Search by product code`} /> */}
                </Flex>

              </Flex>

              <Flex as={'nav'} display={{ base: 'none', md: 'flex' }} gap='23px' w={{ base: '', md: '30%', lg: '60%' }}
                justifyContent='space-around' alignItems='center'  >

                <Box zindex={9}>
                  <Popover>
                    <PopoverTrigger>
                      <Text>Download App</Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Download From </PopoverHeader>
                      <PopoverBody>
                        <Box>
                          <Text>Get it on</Text>
                          <Text>Play Store</Text>
                        </Box>
                      </PopoverBody>
                      <hr />
                      <PopoverBody>
                        <Box>
                          <Text>Get it on</Text>
                          <Text>Apple Store</Text>
                        </Box>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>

                <Text height="50px" border={"1px solid grey"}></Text>

                <Text>Become a Supplier </Text>

                <Text height="50px" border={"1px solid grey"}></Text>

                <Box zindex={9}>
                  <Popover>
                    <PopoverTrigger>

                      <Text>Profile</Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Manage Account</PopoverHeader>
                      <PopoverBody>
                        <Box>
                          <Text>Vishal</Text>
                          <Text>1234567890</Text>
                        </Box>
                      </PopoverBody>

                      <PopoverBody>My Orders</PopoverBody>
                      <hr />
                      <PopoverBody>Log Out</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>

                <Text cursor='pointer'>Cart</Text>



              </Flex>

            </Flex>

            <Box width='5%' padding={"2px"} mt={"10px"} justifyContent={'center'} >
              <Text fontSize={"25px"} onClick={ToggleTheme} cursor='pointer'>{Theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}</Text>
            </Box>

          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} style={Theme === 'light' ? light : dark}>
              <Stack as={'nav'} spacing={4} color='goldenrod' fontWeight='600'>
                <Text cursor='pointer'>Womens</Text>
                <Text cursor='pointer'>Mens</Text>
                <Text cursor='pointer'>Kids</Text>
                <Text cursor='pointer'>Electronics</Text>
                <Text cursor='pointer'>Profile</Text>
              </Stack>
            </Box>
          ) : null}
        </Box>

        <Flex  style={Theme === 'light' ? light : dark} shadow='lg' position={"fixed"} width={"100%"} margin="auto" display={{ base: 'none', md: 'flex', lg: "flex" }} gap='14px' padding={"20px"} marginTop={"70px"}
          justifyContent='space-around' alignItems='center' >
          <Text cursor='pointer'>Women Ethnic </Text>
          <Text cursor='pointer'>Women Western</Text>
          <Text cursor='pointer'>Men</Text>
          <Text cursor='pointer'>Kids</Text>
          <Text cursor='pointer'>Home & Kitchen</Text>
          <Text cursor='pointer'>Beauty & Health</Text>
          <Text cursor='pointer'>Jewellery & Accessories </Text>
          <Text cursor='pointer'>Bags & Footwear</Text>
          <Text cursor='pointer'>Electronics</Text>

        </Flex>
      </Box>



    </>
  );
}

export default Navbar