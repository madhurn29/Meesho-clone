import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Badge, Box, Stack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Hide } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

export const Sidebar = () => {
    const [productList, setProductList] = useState([]);
    const [sortOption, setSortOption] = useState('Price: Low to High');

    const handleSortOption = (event) => {
        const option = event.target.value;
        setSortOption(option);
        let sortedProducts = [];
        if (option === 'Price: Low to High') {
          sortedProducts = productList.sort((a, b) => a.price - b.price);
        } else if (option === 'Price: High to Low') {
          sortedProducts = productList.sort((a, b) => b.price - a.price);
        }
        setProductList(sortedProducts);
      };
  
  return (
    <Box>

            <Accordion fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)' border="1px solid rgb(240,240,240)" padding={"20px"} allowMultiple>
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                <Text fontSize={"17px"}>Filters</Text>
                                <Text fontSize={"13px"} color="grey">1000+ Products</Text>
                            </Box>

                        </AccordionButton>
                    </h2>

                </AccordionItem>
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Sort by
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                           
                        <select id="sort-option" value={sortOption} onChange={handleSortOption}>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                            
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                {/* category */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Input />
                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Analog Watches
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Anklets & Toe Rings
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Appliance Covers
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Artificial Plant and Flower
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Bags & Backpacks
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Bedsheets
                            </Checkbox>

                            <Checkbox colorScheme='green' >
                                Ayurvedic
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* Price */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Price
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                           
                            <Checkbox  value='199'    
                                 borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 199
                            </Checkbox>
                            <Checkbox  value={299}    
                                 borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 399
                            </Checkbox>
                            <Checkbox  value={599}    
                                 borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 599
                            </Checkbox>
                            <Checkbox  value={799}    
                                 borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 799
                            </Checkbox>
                            <Checkbox  value={999}    
                                 borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 999
                            </Checkbox>
                            
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>


                {/* Rating */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Rating
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                2.0 and above
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                3.0 and above
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                4.0 and above
                            </Checkbox>

                            <Checkbox colorScheme='green' >
                                M-Rated
                            </Checkbox>

                        </Stack>
                    </AccordionPanel>
                </AccordionItem>


                {/* fabric */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Fabric
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Input />
                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Acrylic

                            </Checkbox>
                            <Checkbox colorScheme='green' >

                                Art Silk

                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Bamboo

                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Banarasi Silk

                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Chambray

                            </Checkbox>
                            <Checkbox colorScheme='green' >

                                Chanderi Cotton

                            </Checkbox>

                            <Checkbox colorScheme='green' >
                                Combed Cotton
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* oxfords */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                oxfords
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Heels
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* dialshape */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                dial_shape
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Round
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* colors */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Colors
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"5px"}>
                        <Input />

                        <Stack padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Beinge
                            </Text>
                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Black
                            </Text>

                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Blue
                            </Text>
                        </Stack>
                        <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Different Color</Text>
                        <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Maroon Shade</Text>
                        <Stack borderRadius={"15px"} padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Grey
                            </Text>
                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Pink
                            </Text>

                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Maroon
                            </Text>
                        </Stack>
                        <Stack padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
                            <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                White
                            </Text>
                        </Stack>
                        <Text borderRadius={"15px"} padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Red Shade</Text>

                    </AccordionPanel>
                </AccordionItem>





                {/* Size */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Size
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Free
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Height
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Lenght
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* Combo */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Combo
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox colorScheme='green' >
                                Combo
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Pack of 2
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Pack of 3
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Pack of 4
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Pack of 5
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Pack of 6
                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Single
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>

  )
// return (
//   < Hide breakpoint='(max-width: 480px)'>

//                             <Box width="23%" >
//                                 <Accordion fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(102, 102, 102)' border="1px solid rgb(240,240,240)" padding={"20px"} allowMultiple>
//                                     {/* category */}
//                                     <AccordionItem marginTop="20px" >
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Category
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>
//                                             <Input />
//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Analog Watches
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Anklets & Toe Rings
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Appliance Covers
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Artificial Plant and Flower
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Bags & Backpacks
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Bedsheets
//                                                 </Checkbox>

//                                                 <Checkbox colorScheme='green' >
//                                                     Ayurvedic
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* fabric */}
//                                     <AccordionItem marginTop="20px" >
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Fabric
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>
//                                             <Input />
//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Acrylic

//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >

//                                                     Art Silk

//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Bamboo

//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Banarasi Silk

//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Chambray

//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >

//                                                     Chanderi Cotton

//                                                 </Checkbox>

//                                                 <Checkbox colorScheme='green' >
//                                                     Combed Cotton
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* oxfords */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     oxfords
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Heels
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* dialshape */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     dial_shape
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Round
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* colors */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Colors
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel padding={"5px"}>
//                                             <Input />

//                                             <Stack padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Beinge
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Black
//                                                 </Text>

//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Blue
//                                                 </Text>
//                                             </Stack>
//                                             <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Different Color</Text>
//                                             <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Maroon Shade</Text>
//                                             <Stack borderRadius={"15px"} padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Grey
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Pink
//                                                 </Text>

//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Maroon
//                                                 </Text>
//                                             </Stack>
//                                             <Stack padding={"5px"} fontSize={"17px"} justifyContent={"space-around"} direction='row'>
//                                                 <Text borderRadius={"15px"} padding="10px" border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     White
//                                                 </Text>
//                                             </Stack>
//                                             <Text borderRadius={"15px"} padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"}>Combo Of Red Shade</Text>

//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* Price */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Price
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 149
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 249
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 449
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 549
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 749
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 899
//                                                 </Text>
//                                                 <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
//                                                     Under ₹ 999
//                                                 </Text>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* Rating */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Rating
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     2.0 and above
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     3.0 and above
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     4.0 and above
//                                                 </Checkbox>

//                                                 <Checkbox colorScheme='green' >
//                                                     M-Rated
//                                                 </Checkbox>

//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* Size */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Size
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Free
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Height
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Lenght
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                     {/* Combo */}
//                                     <AccordionItem marginTop="20px">
//                                         <h2>
//                                             <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
//                                                 <Box as="span" flex='1' textAlign='left'>
//                                                     Combo
//                                                 </Box>
//                                                 <AccordionIcon />
//                                             </AccordionButton>
//                                         </h2>
//                                         <AccordionPanel pb={4}>

//                                             <Stack spacing={5} direction='column'>
//                                                 <Checkbox colorScheme='green' >
//                                                     Combo
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Pack of 2
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Pack of 3
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Pack of 4
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Pack of 5
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Pack of 6
//                                                 </Checkbox>
//                                                 <Checkbox colorScheme='green' >
//                                                     Single
//                                                 </Checkbox>
//                                             </Stack>
//                                         </AccordionPanel>
//                                     </AccordionItem>

//                                 </Accordion>
//                             </Box>

//                         </Hide>
// )
}

