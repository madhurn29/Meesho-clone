import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Hide } from '@chakra-ui/react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Navbar/Footer'
import Sidebar from './Sidebar'
import HomeImages from './HomeImages'
import HomeCard from './HomeCard'

const Homepage = () => {

    const [Productsdata, setProductsdata] = React.useState([]);
    console.log('Productsdata: ', Productsdata);
    // price filter stored here
    const [priceFilter, setPriceFilter] = React.useState([]);

    // inputvalue form navbnar and sidebar to  filter data 
    const [inputValue, setInputValue] = React.useState('');
    const filterdatabycategory = Productsdata.filter((item) => item.category === inputValue)

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    // filter by category get value from sidebar
    const categoryFilterFunc = (e) => {
        setInputValue(e.target.value)
        // setInputValue('');
    }

    
    //   fetch data from api // backend
    const getData = () => {
        fetch(`https://long-lime-fly-tux.cyclic.app/homeproducts`)
            .then(res => res.json())
            .then(res => setProductsdata(res));
    }

    React.useEffect(() => {
        getData()
    }, [inputValue]);

    const handlePriceFilterChange = (value) => {
        setPriceFilter(value);
    };
    // filter - data by -  price - get value - form side bar
    const filteredData = Productsdata.filter((item) => {
        if (priceFilter.length === 0) {
            return true;
        }
        return priceFilter.some((price) => price >= item.price);
    });




    return (
        <>
            <Navbar handleInputChange={handleInputChange} />

            <Box mt="50px">

                {/* HomeImages */}
                <HomeImages />

                {/* <Body></Body> */}
                <Box width="90%" m="auto" mt="5%">
                    <Text fontSize={{ base: "20px", lg: "32px" }} fontWeight={700}>Products For You</Text>
                    <Flex gap="20px">

                        {/* sidebar - price - category -  filter -  function - passed */}

                        < Hide breakpoint='(max-width: 480px)'>
                            <Sidebar onPriceFilterChange={handlePriceFilterChange} categoryFilter={categoryFilterFunc} />
                        </Hide>

                        {/* HomeCards - data - passed  */}
                        <HomeCard state={filteredData} filterdata={filterdatabycategory} />
                    </Flex>
                </Box>
            </Box>

            {/* <Footer></Footer> */}
            <Footer />
        </>

    )
}



export default Homepage
