import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
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



                <Box width="90%" m="auto" mt="5%">
                    <Text fontSize={{ base: "10px", lg: "32px" }} fontWeight={700}>Products For You</Text>

                    <Flex justifyContent={"space-between"}>
                        <Box width="25%" border="1px solid     black">filters</Box>

                        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(5, 1fr)' }} gap={6} width="70%">
                            {data.map((item) => <Box padding="10px" border="1px solid grey" key={item._id}>

                                <Image width="200px" margin={"auto"}  src={item.src} />

                                <Text textAlign={"lef"} color={" rgb(153, 153, 153)"} >{item.name}</Text>

                                <Flex textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                                    <Text >₹{item.price}</Text>
                                    <Text>{item.onwards}</Text>
                                </Flex>

                                <Text textAlign={"lef"} color={" rgb(153, 153, 153)"} >{item.delivery}</Text>

                                <Flex textAlign={""} color={" rgb(153, 153, 153)"} gap="10px" >
                                    <Text >{item.rating}{<StarIcon />}</Text>
                                    <Text>{item.review}</Text>
                                </Flex>
                            </Box>)}</Grid>
                    </Flex>
                </Box>
            </Box>
        </>

    )
}



export default Homepage
