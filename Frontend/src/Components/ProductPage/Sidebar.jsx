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
  const products=useSelector((store)=>{
    return store.Productreducer.product
})
  const [searchparams,setSearchparams]=useSearchParams()
  let initialState=searchparams.getAll("category")
  const initialOrder = searchparams.get("order");
  const [category, setCategory] = useState(initialState || []); // [motivational]
  const [order, setOrder] = useState(initialOrder || "");
  

  const handleFilter=(e)=>{
    let newCategory=[...category];

    if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value,1))
    }else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
  const params={
    category
  }
  order && (params.order = order);
  setSearchparams(params)
  }, [category,order])

  
  return (
    <Box>
      
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Sort by
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box onChange={handleSort} direction='column'>
        {/* <Input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <Input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label> */}
        <RadioGroup defaultValue='2'>
        <Stack spacing={5} direction='column'>
         <Radio colorScheme='pink' value={"asc"} defaultChecked={order === "asc"}>
         Price: Low to High
        </Radio>
          <Radio colorScheme='pink' value={"desc"} defaultChecked={order === "desc"}>
          Price: High to Low
        </Radio>
     </Stack>
</RadioGroup>
      </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='green' >
                                                    Men
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Makeup
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Kids                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                Women-ethnic
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                Women-western
                                                </Checkbox>
                                                <Checkbox colorScheme='green' >
                                                    Home-Kitchen
                                                </Checkbox>

                                                <Checkbox colorScheme='green' >
                                                    Ayurvedic
                                                </Checkbox>
                                            </Stack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack direction='row'>
  <Badge color={'gray'}>Women</Badge>
  <Badge color={'gray'}>Mens</Badge>
  <Badge color={'gray'}>Kids</Badge>
</Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={5} direction='column'>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 149
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 249
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 449
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 549
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 749
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 899
                                                </Text>
                                                <Text borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                                    Under ₹ 999
                                                </Text>
                                            </Stack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Rating
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    <Stack spacing={5} direction='column'>
                                                <Checkbox colorScheme='pink' >
                                                    2.0 and above
                                                </Checkbox>
                                                <Checkbox colorScheme='pink' >
                                                    3.0 and above
                                                </Checkbox>
                                                <Checkbox colorScheme='pink' >
                                                    4.0 and above
                                                </Checkbox>

                                                <Checkbox colorScheme='pink' >
                                                    M-Rated
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

