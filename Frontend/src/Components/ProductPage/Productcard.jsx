import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Badge,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
export const Productcard = ({id,images,price,rating,reviews,title}) => {
    const navigate = useNavigate();
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      border={"1px solid rgb(223, 223, 223)"}
      cursor={"pointer"}
      onClick={() => {
       navigate(`/product/${id}`);
      }}
    >
      <Image src={images} alt={id} height={"232px"} margin={"auto"} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box fontSize="xl">
        ₹{price}
          <Box as="span" color="gray.600" fontSize="sm">
            /onwards
          </Box>
        </Box>
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="gray"
          mt={"10px"}
          h={"20px"}
          alignItems={"center"}
        >
          Free Delivery
        </Badge>
        <br />
        <Badge
          mt={"15px"}
          borderRadius="full"
          px="2"
          fontSize="md"
          color={"white"}
          bgColor={
            rating >= 4
              ? "rgb(3, 141, 99)"
              : rating > 2
              ? "rgb(244, 182, 25)"
              : "red"
          }
        >
          {rating}
          <StarIcon color={"white"} height={"10px"} />
        </Badge>
        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviews}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

/*
Name : Hathi Saree Designer Cotton Silk Hathi Saree

Saree Fabric : Cotton Silk

Blouse : Running Blouse

Blouse Fabric : Cotton Silk

Pattern : Solid

Blouse Pattern : Solid

Net Quantity (N) : Single

Hathi Sarees,Designer Sarees,Silk Sarees,Rich Look Sarees

Sizes : 

Free Size (Saree Length Size : 6.2 m, Blouse Length Size: 0.8 m)

Country of Origin : India


"title": "Aakarsha Fabulous Kurtis",
      "price": "₹565",
      "images": "https://images.meesho.com/images/products/162582930/d0yc2_400.jpg",
      "rating": "3.3",
      "reviews": "4 Reviews",
      "id": "4",
      "delivery": 1673985309
*/