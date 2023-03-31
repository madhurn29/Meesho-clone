import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Home from "../Images/Home.png"
import Home2 from "../Images/Home2.png"
import Home3 from "../Images/Home3.png"
const HomeImages = () => {
  return (
<>
<Image width="80%" margin={"auto"} mt="2%" src={Home} />
    <Box>
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
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Home Decor</Text>
                        </Box>
                        <Box mt={"6%"}>
                            <Image src={"https://images.meesho.com/images/marketing/1678691832099.webp"} />
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Kitchen & Appliances</Text>
                        </Box>
                        <Box mt={"6%"}>
                            <Image src={"https://images.meesho.com/images/marketing/1678691796046.webp"} />
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Health Care</Text>
                        </Box>
                    </Flex>


                    <Flex p={"2%"} gap="5%" justifyContent={"right"} width={"80%"} m="auto" mt="2%" mb={"50px"} backgroundImage={"https://images.meesho.com/images/marketing/1678691892265.jpg"}>
                        <Box mt={"6%"}>
                            <Image src={"https://images.meesho.com/images/marketing/1678691960553.webp"} />
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Accessories</Text>
                        </Box>
                        <Box mt={"6%"}>
                            <Image src={"https://images.meesho.com/images/marketing/1678691936892.webp"} />
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Footwear</Text>
                        </Box>
                        <Box mt={"6%"}>
                            <Image src={"https://images.meesho.com/images/marketing/1678691925419.webp"} />
                            <Text fontSize={{ base: "10px", lg: "18px" }} bg="black" color="white" p="5%" mt="5%">Electronics</Text>
                        </Box>
                    </Flex>

                    <Box width={"80%"} m="auto" mb={"50px"} >
                        <Image src={Home2} />
                    </Box>
                    <Box width={"80%"} m="auto" mt="5%" mb={"50px"}>
                        <Image src={Home3} />
                    </Box>
                </Box>
</>

  )
}

export default HomeImages