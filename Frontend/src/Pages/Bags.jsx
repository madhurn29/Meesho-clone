import { Image } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Navbar/Footer'
import Navbar from "../Components/Navbar/Navbar"
const Bags = () => {
  return (
    <>
    <Navbar/>
   <Image width={{base:"200px",md:"300px",lg:"500px"}} margin="auto" src="https://i.ibb.co/Y02VKys/work-work-in-progress.gif" alt="" />
    <Footer/>
    </>

  )
}

export default Bags