import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Productcard } from "./Productcard";
import Styles from "../../Styles/Product.module.css";
import axios from "axios";
import { Sidebar } from "./Sidebar";
import Navbar from "../Navbar/Navbar";
import { Show, Hide,Text } from "@chakra-ui/react";
import Footer from "../Navbar/Footer";
import { BsTypeH2 } from "react-icons/bs";
import { Loader } from "./Loader";

const arr=new Array(12).fill('')
export const Mens = () => {
  const [pro, setPro] = useState([]);
  const [load,setLoad]=useState(false)

  useEffect(() => {
    setLoad(true)
    axios
      .get("https://long-lime-fly-tux.cyclic.app/products?category=mens")
      .then((res) => {
        console.log("res.data:", res.data);
        setPro(res.data);
        setLoad(false)
      })
      .catch((err) => {console.log(err)
        setLoad(false)});
  }, []);
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
  );
};
