import React from 'react'
import { ProductList } from './ProductList'
import { Sidebar } from './Sidebar'
import Styles from '../../Styles/Products.module.css'
import { Badge, Box, Divider, Heading, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/react'
export const Product = () => {
  return (
    <Box>
      <Divider orientation='horizontal' />
      
      <Box className={Styles["pro-filter-container"]}>
    
      <Hide breakpoint='(max-width: 750px)'>
      <Box className={Styles["filter-component"]}>
      
          <Sidebar/>
          </Box>
      </Hide>
      <Box className={Styles["pro-list"]}>
          <ProductList/>
      </Box>
    </Box>
    </Box>
  )
}
