import React from 'react'

import { Box, Badge,Image, Skeleton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
export const Loader = () => {
    
  return (
    <Skeleton
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      border={"1px solid rgb(223, 223, 223)"}
      cursor={"pointer"}
      
    >
      <Image src="#" alt='#' height={"232px"} margin={"auto"} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          '#'
        </Box>

        <Box fontSize="xl">
        ₹'#'
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
          
        >
          "#"
          <StarIcon color={"white"} height={"10px"} />
        </Badge>
        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            "#"
          </Box>
        </Box>
      </Box>
    </Skeleton>
  )
}

