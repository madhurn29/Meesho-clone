import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/ProductRedux/action'
import { Productcard} from './Productcard'
import Styles from "../../Styles/Product.module.css"
import { useLocation, useSearchParams } from 'react-router-dom'
import { Box,Text } from '@chakra-ui/layout'


export const ProductList = () => {
    const dispatch=useDispatch()
    const pro=useSelector((store)=>{
        return store.Productreducer.product
    })
    const location=useLocation()
    const [searchparams]=useSearchParams()
    console.log("proon:",pro)
    
    useEffect(() => {
      const order = searchparams.get("order");
      let paramObj={
        params:{
          category:searchparams.get('category')
        }
      }
    dispatch(getProduct(paramObj,"mens"))
    }, [location.search])
  return (
    
    <Box>
      <Box h='100px' w={'75%'} margin='auto' >
      <Text fontSize='xl' fontWeight='bold' mt={'40px'}>
        Sarees
      </Text>
      <Text fontSize='sm'>
      Showing 21-40 out of 10000 products
      </Text>
      </Box>
      <Box className={Styles.container} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
      
      {pro.length>0 && pro.map((el)=>{
          return <Productcard key={el._id} {...el}/>
      })}
  </Box>
    </Box>
   
  )
}

