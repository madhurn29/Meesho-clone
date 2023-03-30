import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Grid, Image, Input, Stack, Text } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Home from "../Components/Images/Home.png"
import Home2 from "../Components/Images/Home2.png"
import Home3 from "../Components/Images/Home3.png"
// import axios from 'axios'
import data from "../ok.json"
import Navbar from '../Components/Navbar/Navbar'

const Homepage = () => {
    const [state, setstate] = React.useState([]);
    let value = localStorage.getItem('value') || "";
    // localStorage.removeItem("value");
    console.log('value: ', value);
    console.log('state: ', state);
    let count = 0
    const getData = () => {
        fetch(`https://dummyjson.com/products/?search=${value}`)
            .then(res => res.json())
            .then(res => setstate(res.products));
    }
    React.useEffect(() => {

        getData()
        ++count

    }, [value, count]);

    //   React.useEffect(() => {


    //   }, []);
    const filterdata = data.filter((item) => item.category === value)
    console.log('filterdata: ', filterdata);

    return (
        <>
            <Navbar />
            <Box height={{ base: '40px', md: '60px' }}></Box>
            <Box mt="50px">

                <Image width="80%" margin={"auto"} mt="2%" src={Home} />

                <Flex width="80%" margin={"auto"}>
                    <Divider orientation='horizontal' borderColor={'pink'} width="25%" m="auto" />
                    <Text fontSize={{ base: "9px", lg: "36px" }} fontWeight={600}>Top Categories to choose from</Text>
                    <Divider orientation='horizontal' borderColor={'pink'} width="25%" m="auto" />
                </Flex>

                <Flex p={"2%"} justifyContent={"space-around"} width={"80%"} m="auto" mt="2%" mb={"50px"} backgroundImage={"https://images.meesho.com/images/marketing/1678691670429.jpg"}>
                    <Box mt={"5%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691686252.webp"} />
                    </Box>
                    <Box mt={"16%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691699680.webp"} />
                    </Box>
                    <Box mt={"16%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691712594.webp"} />
                    </Box>
                </Flex>


                <Flex p={"2%"} gap="5%" justifyContent={"right"} width={"80%"} m="auto" mb={"50px"} backgroundImage={"	https://images.meesho.com/images/marketing/1678691743015.jpg"}>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691846068.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Home Decor</Text>
                    </Box>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691832099.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Kitchen & Appliances</Text>
                    </Box>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691796046.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Health Care</Text>
                    </Box>
                </Flex>


                <Flex p={"2%"} gap="5%" justifyContent={"right"} width={"80%"} m="auto" mt="2%" mb={"50px"} backgroundImage={"https://images.meesho.com/images/marketing/1678691892265.jpg"}>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691960553.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Accessories</Text>
                    </Box>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691936892.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Footwear</Text>
                    </Box>
                    <Box mt={"6%"}>
                        <Image src={"https://images.meesho.com/images/marketing/1678691925419.webp"} />
                        <Text bg="black" color="white" p="5%" mt="5%">Electronics</Text>
                    </Box>
                </Flex>

                <Box width={"80%"} m="auto" mb={"50px"} >
                    <Image src={Home2} />
                </Box>
                <Box width={"80%"} m="auto" mt="5%" mb={"50px"}>
                    <Image src={Home3} />
                </Box>
                {/* <Hide breakpoint='(max-width: 400px)'>
                    <Box>This text appears only on screens 400px and smaller.</Box>
                </Hide> */}
                {/* <Show above='base'>
                    <Box>This text appears at the "sm" value screen width or greater.</Box>
                </Show> */}
                {/* <Hide below='md'>
                    <Box>This text hides at the "md" value screen width and smaller.</Box>
                </Hide> */}

                <Box width="90%" m="auto" mt="5%">
                    <Text fontSize={{ base: "20px", lg: "32px" }} fontWeight={700}>Products For You</Text>

                    <Flex justifyContent={"space-between"}>
                        < Hide breakpoint='(max-width: 450px)'>

                            <Box  width="20%" >
                                <Accordion border="1px solid     black" padding={"30px"} allowMultiple>
                                    {/* category */}
                                    <AccordionItem padding={"10px"}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Category
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input />
                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Analog Watches
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Anklets & Toe Rings
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Appliance Covers
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Artificial Plant and Flower
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Bags & Backpacks
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Bedsheets
                                                </Checkbox>

                                                <Checkbox colorScheme='green' >
                                                    Ayurvedic
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    {/* fabric */}
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Fabric
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input />
                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Acrylic

                                                </Checkbox>
                                                <Checkbox colorScheme='green' >

                                                    Art Silk

                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Bamboo

                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Banarasi Silk

                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Chambray

                                                </Checkbox>
                                                <Checkbox colorScheme='green' >

                                                    Chanderi Cotton

                                                </Checkbox>

                                                <Checkbox colorScheme='green' >
                                                    Combed Cotton
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* oxfords */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    oxfords
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Heels
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* dialshape */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    dial_shape
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Round
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* colors */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Colors
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input />
                                            <Text>Try New</Text>
                                            <Stack spacing={5} direction='row'>
                                                <Text colorScheme='green' >
                                                    Beinge
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Black
                                                </Text>

                                                <Text colorScheme='green' >
                                                    Blue
                                                </Text>
                                            </Stack>
                                            <Text>Combo Of Different Color</Text>
                                            <Text>Combo Of Maroon Shade</Text>
                                            <Stack spacing={5} direction='row'>
                                                <Text colorScheme='green' >
                                                    Grey
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Pink
                                                </Text>

                                                <Text colorScheme='green' >
                                                    Maroon
                                                </Text>
                                            </Stack>
                                            <Stack spacing={5} direction='row'>
                                                <Text colorScheme='green' >
                                                    White
                                                </Text>
                                            </Stack>
                                            <Text>Combo Of Red Shade</Text>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* Price */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Price
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Input />
                                            <Stack spacing={5} direction='column'>
                                                <Text colorScheme='green' >
                                                    Under ₹ 149
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 249
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 449
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 549
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 749
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 899
                                                </Text>
                                                <Text colorScheme='green' >
                                                    Under ₹ 999
                                                </Text>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* Rating */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Rating
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    2.0 and above
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    3.0 and above
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    4.0 and above
                                                </Checkbox>

                                                <Checkbox colorScheme='green' >
                                                    M-Rated
                                                </Checkbox>

                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* Size */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Size
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Free
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Height
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Lenght
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* Combo */}
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Combo
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Combo
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Pack of 2
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Pack of 3
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Pack of 4
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Pack of 5
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Pack of 6
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Single
                                                </Checkbox>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                            </Box>

                        </Hide>
                        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(4, 1fr)' }} gap={6} width="75%">
                            {filterdata.length > 0 ? filterdata.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid grey" borderRadius={"10px"} key={item.id}>

                                <Image width={{ base: "150px", md: "200px", lg: "250px" }} height={{ base: "250px", md: "200px", lg: "300px" }} margin={"auto"} src={item.images[0]} />

                                <Box mt="10px" >

                                    <Text mt="10px" color={" rgb(153, 153, 153)"} >{item.title.substring(0, 30)}</Text>
                                    <Flex mt="10px" textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                                    </Flex>
                                    <Text mt="10px" borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" rgb(153, 153, 153)"} >{item.delivery}</Text>
                                    <Flex mt="10px" color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text height={"30px"} borderRadius={"50px"} padding="3px 0px 0px 13px" w="70px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating} <span><StarIcon fontSize={"10px"} /> </span> </Text>
                                        <Text padding={"5px"} fontSize={"15px"}>{item.review}</Text>
                                    </Flex>
                                </Box>

                            </Box>) : data.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid grey" borderRadius={"10px"} key={item.id}>

                                <Image width={{ base: "150px", md: "200px", lg: "250px" }} height={{ base: "250px", md: "200px", lg: "300px" }} margin={"auto"} src={item.images[0]} />

                                <Box mt="10px" >

                                    <Text mt="10px" color={" rgb(153, 153, 153)"} >{item.title.substring(0, 30)}</Text>
                                    <Flex mt="10px" textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                                    </Flex>
                                    <Text mt="10px" borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" rgb(153, 153, 153)"} >{item.delivery}</Text>
                                    <Flex mt="10px" color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text height={"30px"} borderRadius={"50px"} padding="3px 0px 0px 13px" w="70px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating} <span><StarIcon fontSize={"10px"} /> </span> </Text>
                                        <Text padding={"5px"} fontSize={"15px"}>{item.review}</Text>
                                    </Flex>
                                </Box>

                            </Box>)}</Grid>

                        {/* <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(4, 1fr)' }} gap={6} width="75%">
                            {data.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid grey" borderRadius={"10px"} key={item._id}>

                                <Image width={{ base: "150px", md: "200px", lg: "250px" }} height={{ base: "250px", md: "200px", lg: "300px" }} margin={"auto"} src={item.src} />

                                <Box mt="10px" >

                                    <Text mt="10px" color={" rgb(153, 153, 153)"} >{item.name.substring(1, 30)}</Text>
                                    <Flex mt="10px" textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                                    </Flex>
                                    <Text mt="10px" borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" rgb(153, 153, 153)"} >{item.delivery}</Text>
                                    <Flex mt="10px" color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text height={"30px"} borderRadius={"50px"} padding="3px 0px 0px 13px" w="70px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating} <span><StarIcon fontSize={"10px"} /> </span> </Text>
                                        <Text padding={"5px"} fontSize={"15px"}>{item.review}</Text>
                                    </Flex>
                                </Box>

                            </Box>)}</Grid> */}
                    </Flex>
                </Box>
            </Box>
        </>

    )
}



export default Homepage
