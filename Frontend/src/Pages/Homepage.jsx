import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import Home from "../Components/Images/Home.png"
import Home2 from "../Components/Images/Home2.png"
import Home3 from "../Components/Images/Home3.png"
import axios from 'axios'
import data from "../product.json"

const Homepage = () => {
    const [state, setstate] = React.useState([]);
    console.log('state: ', state);
    const getData = () => {
        axios.get(`https://ajio-qvwt.onrender.com/data`)
            .then((res) => setstate(res.data))
            .catch((err) => console.log(err.message))
    }
    React.useEffect(() => {

        getData()
    }, []);
    return (
        <>
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
                            <Box width="25%" border="1px solid     black">filters</Box>
                        </Hide>
                        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(4, 1fr)' }} gap={6} width="70%">
                            {data.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid grey" borderRadius={"10px"} key={item._id}>

                                <Image width="200px" height={"200px"} margin={"auto"} src={item.src} />

                                <Box padding={"5px"}>

                                    <Text  color={" rgb(153, 153, 153)"} >{item.name.substring(1,20)}</Text>
                                    <Flex textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                                    </Flex>
                                    <Text borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" rgb(153, 153, 153)"} >{item.delivery}</Text>
                                    <Flex color={" rgb(153, 153, 153)"} gap="10px" >
                                        <Text height={"30px"} borderRadius={"50px"} padding="3px 0px 0px 13px" w="70px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating} <span><StarIcon fontSize={"10px"} /> </span> </Text>
                                        <Text padding={"5px"} fontSize={"15px"}>{item.review}</Text>
                                    </Flex>
                                </Box>

                            </Box>)}</Grid>
                    </Flex>
                </Box>
            </Box>
        </>

    )
}



export default Homepage
