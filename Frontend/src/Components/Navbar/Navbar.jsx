import { useContext } from 'react';
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Image, Input } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AppContext } from '../../Context/Theme';

import meesho from "../Images/meesho.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
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

  return (
    <>
      <Box bgColor={"red"} position='fixed' w='100%' style={Theme === 'light' ? light : dark} shadow='lg' padding={"10px"}>
        <Flex justifyContent={'space-between'} gap="10px" >
          <IconButton style={Theme === 'light' ? light : dark}
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            marigin-top="15px"
            boreder="1px solid blue" onClick={isOpen ? onClose : onOpen} />

          <Flex alignItems='center' w='95%' m={'auto'} gap="10px" >

            <Flex gap="10px">
              <Image h={{ base: '20px', md: '40px', lg: "40px" }} width={{ base: '100px', md: '140px', lg: "190px" }} src={meesho} />
              <Flex gap="10px" border={"1px solid grey"}>
                <Search2Icon color="grey" margin={"5px"} />
                <Input variant='unstyled' placeholder={`Try Saree,Kurta or Search by product code`} />
              </Flex>
            </Flex>
            
            <Flex as={'nav'} display={{ base: 'none', md: 'flex' }} gap='4px' w={{ base: '', md: '60%', lg: '50%' }}
              justifyContent='space-between' alignItems='center' >
              <Text cursor='pointer'><Link to={"/product"}>Women</Link> </Text>
              <Text cursor='pointer'>Men</Text>
              <Text cursor='pointer'>Kids</Text>
              <Text cursor='pointer'>Kitchen</Text>
              <Text cursor='pointer'>Beauty</Text>
              <Text cursor='pointer'>Jewellery </Text>
              <Text cursor='pointer'>Electronics</Text>
             <Text height="50px" border={"1px solid grey"}></Text>
            </Flex>
           
            <Flex as={'nav'} display={{ base: 'none', md: 'flex' }} gap='3px' w={{ base: '', md: '30%', lg: '20%' }}
              justifyContent='space-around' alignItems='center'  >
              <Text cursor='pointer'>Download App</Text>
              <Text height="50px" border={"1px solid grey"}></Text>
              <Text cursor='pointer'>Profile</Text>
              <Text cursor='pointer'>Cart</Text>
              <Text height="50px" border={"1px solid grey"}></Text>
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
    </>
  );
}

export default Navbar