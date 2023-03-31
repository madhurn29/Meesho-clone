import React, { useRef } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Hide } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Navbar/Footer'
import Sidebar from './Sidebar'
import HomeImages from './HomeImages'
import HomeCard from './HomeCard'
import data from "./HomePageProducts.json"
/* smartphones furniture mens-watches sunglasses lighting automotive womens-jewellery womens-bags mens-shoes mens-shirts womens-shoes tops  womens-dresses laptops fragrances skincare home-decoration groceries */
const Homepage = () => {

    const [Productsdata, setProductsdata] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    // console.log('inputVlllalue: ', inputValue);

    const handleInputChange = (value) => {
      setInputValue(value);
    };
  
    const getData = () => {
        fetch(`https://long-lime-fly-tux.cyclic.app/homeproducts`)
            .then(res => res.json())
            .then(res => setProductsdata(res));
    }
    React.useEffect(() => {
        getData()
    }, [inputValue]);
    const filterdata = Productsdata.filter((item) => item.category === inputValue)
    const [priceFilter, setPriceFilter] = React.useState([]);

    const handlePriceFilterChange = (value) => {
      setPriceFilter(value);
    };
  
    const filteredData = data.filter((item) => {
        if (priceFilter.length === 0) {
            return true;
        }
        return priceFilter.some((price) => price >= item.price);
    });
    console.log('filteredData: ', filteredData);

    return (
        <>
            <Navbar  handleInputChange={handleInputChange} />
           
            <Box mt="50px">
                {/* HomeImages */}
                <HomeImages />

                {/* <Body></Body> */}
                <Box width="90%" m="auto" mt="5%">
                    <Text fontSize={{ base: "20px", lg: "32px" }} fontWeight={700}>Products For You</Text>
                    <Flex gap="20px">
                        {/* sidebar */}
                        < Hide breakpoint='(max-width: 480px)'>
                            <Sidebar onPriceFilterChange={handlePriceFilterChange} />
                        </Hide>
                        {/* HomeCards */}
                        <HomeCard state={filteredData} filterdata={filterdata} />
                    </Flex>
                </Box>
            </Box>

            {/* <Footer></Footer> */}
            <Footer />
        </>

    )
}



export default Homepage
