import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Productcard } from './Productcard'
import Styles from "../../Styles/Product.module.css"
import axios from 'axios'
import { Show, Hide } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar'
import { Sidebar } from './Sidebar'
import Footer from '../Navbar/Footer'
export const WomensWestern = () => {

    const [pro,setPro]=useState([])

    useEffect(()=>{
        axios.get("https://long-lime-fly-tux.cyclic.app/products?category=womensWestern").then((res)=>{
            console.log(res.data)
            setPro(res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <Box gap="30px">
      <Navbar/>
      <Box className={Styles.props} margin-top= '25px'>
        
          <Hide breakpoint='(max-width: 400px)'>
          <Sidebar/>
          </Hide>
       
        <Box className={Styles.container} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
      
          {pro.length>0 && pro.map((el)=>{
              return <Productcard key={el._id} {...el}/>
          })}
        </Box>
    </Box>
    <Footer/>
    </Box>
  )
}
