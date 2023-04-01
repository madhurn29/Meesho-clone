import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Productcard } from './Productcard'
import Styles from "../../Styles/Product.module.css"
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import { Sidebar } from './Sidebar'
import { Show, Hide } from '@chakra-ui/react'
import Footer from '../Navbar/Footer'
import { Loader } from './Loader'

const arr=new Array(12).fill('')
export const Makeup = () => {

    const [pro,setPro]=useState([])
    const [load,setLoad]=useState(false)
    const category='makeup';
    useEffect(()=>{
      setLoad(true)
        axios.get(`https://long-lime-fly-tux.cyclic.app/products?category=${category}`).then((res)=>{
            console.log(res.data)
            setPro(res.data)
            setLoad(false)
        }).catch(err=>{console.log(err)
          setLoad(true)})
    },[])
  return (
    <Box>
    <Navbar />
    <Box className={Styles.props} marginTop="45px" justifyContent='space-between' >
      <Box w='25%'>
      <Hide breakpoint="(max-width: 400px)">
        <Sidebar />
      </Hide>
      </Box>

      <Box
        className={Styles.container}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        w='70%'
      >
        {load ? arr.map((el)=>{
          return <Loader/>
        }) : pro.length > 0 &&
          pro.map((el) => {
            return <Productcard key={el._id} {...el} />;
          })}
      </Box>
    </Box>
    <Footer />
  </Box>
  )
}
