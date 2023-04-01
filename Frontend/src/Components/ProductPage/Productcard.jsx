import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Badge,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
export const Productcard = ({_id,images,price,rating,reviews,title,category}) => {
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
       navigate(`/${category}/${_id}`);
      }}
    >
      <Image src={images} alt={_id} height={"232px"} margin={"auto"} />

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

