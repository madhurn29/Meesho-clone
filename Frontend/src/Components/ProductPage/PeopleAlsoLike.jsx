import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/ProductRedux/action'
import { Productcard} from './Productcard'
import Styles from "../../Styles/Product.module.css"


export const PeopleAlsoLike = ({prod}) => {
    const [pro,setPro]=useState([])

    useEffect(() => {
        console.log("proddes:",prod)
    }, [])
  return (
    <Box>
        <Heading fontSize={'lg'}>
            People Also Like
        </Heading>
        <Box className={Styles.contain} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
        {pro.length>0 && pro.map((el)=>{
            return <Productcard key={el.id} {...el}/>
        })}
        </Box>
    </Box>
  )
}
