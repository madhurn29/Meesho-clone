import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HomeCard = ({ filterdata, state }) => {
    return (

        // mappedData filtered data and  all data in grid  
        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(4, 1fr)' }} gap={6} width="75%">
            {filterdata.length > 0 ? filterdata.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid rgb(240,240,240)" borderRadius={"10px"} key={item.id}>
                {/* filtered data mappaed here  */}
                <Image width={{ base: "150px", md: "200px", lg: "250px" }} height={{ base: "250px", md: "200px", lg: "250px" }} margin={"auto"} src={item.images} />

                <Box mt="10px" >

                    <Text mt="10px" color={" rgb(153, 153, 153)"} >{item.title.substring(0, 30)}</Text>
                    <Flex mt="10px" textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                    </Flex>
                    <Text fontSize={"10px"} mt="10px" borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" black"} fontWeight={600} >{item.price > 500 ? "Free Delivery" : "₹99/Delivery"}</Text>
                    <Flex mt="10px" color={" rgb(153, 153, 153)"} justifyContent="space-between" >
                        <Text fontSize={"15px"} borderRadius={"20px"} padding="3px 5px 3px 10px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating}  <StarIcon fontSize={"10px"} />  </Text>
                        <Text padding={"5px"} fontSize={"12px"}>{item.review}</Text>
                    </Flex>
                </Box>

            </Box>) : state.map((item) => <Box box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding="15px" border="1px solid rgb(240,240,240)" borderRadius={"10px"} key={item.id}>
                {/* all data mappaed here  */}
                <Image width={{ base: "150px", md: "240px", lg: "250px" }} height={{ base: "200px", md: "200px", lg: "250px" }} margin={"auto"} src={item.images} />

                <Box mt="10px" >

                    <Text mt="10px" color={" rgb(153, 153, 153)"} >{item.title.substring(0, 30)}</Text>
                    <Flex mt="10px" textAlign={"left"} color={" rgb(153, 153, 153)"} gap="10px" >
                        <Text color="black" fontSize={"24px"} fontWeight={600} >₹{item.price}</Text>
                        <Text padding={"10px"} fontSize={"12px"}>{item.onwards}</Text>
                    </Flex>
                    <Text fontSize={"10px"} mt="10px" borderRadius={"50px"} bgColor={"rgb(249,249,249)"} color={" black"} fontWeight={600} >{item.price > 500 ? "Free Delivery" : "Delivery - ₹99"}</Text>
                    <Flex mt="10px" color={" rgb(153, 153, 153)"} justifyContent="space-between" >
                        <Text fontSize={"15px"} borderRadius={"20px"} padding="3px 5px 3px 10px" bgColor={(item.rating) > 3.6 ? "rgb(35,187,117)" : "orange"} color="white">{item.rating}  <StarIcon fontSize={"10px"} />  </Text>
                        <Text padding={"5px"} fontSize={"12px"}>{item.review}</Text>
                    </Flex>
                </Box>

            </Box>)}</Grid>

    )
}

export default HomeCard
