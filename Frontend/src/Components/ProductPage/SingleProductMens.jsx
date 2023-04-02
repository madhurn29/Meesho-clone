import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Card,
    CardHeader,
    CardBody,
    Badge,
    List,
    ListItem,
    Button,
    Hide,
    Toast,
    useToast,
  } from '@chakra-ui/react';

  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoPricetagsOutline,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowRightIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';
import { BsArrowReturnLeft, BsCartDash, BsCash } from 'react-icons/bs';
import { ProductList } from './ProductList';
import { PeopleAlsoLike } from './PeopleAlsoLike';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
  

  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SingleProductMens() {
    
    const {id} = useParams();
    console.log("id:",id)
    const toast=useToast()
  
  
  const [prod, setProd] = useState({});
  const [cart,setCart]=useState([])
  console.log("prod:",prod.products)
  const navigate=useNavigate()

    

  useEffect(() => {

    axios.get(`https://long-lime-fly-tux.cyclic.app/products/${id}`).then(res=>{
        console.log("res.data11:",res.data.products)
        setProd(res.data.products)
    }).catch(err=>console.log(err))
  }, []);
// //border={'1px solid #C2C2C2'}

  const handleCart=(prod)=>{
    // console.log("cart:",prod)
    const newData={...prod,quantity:1}
    console.log("newdata:",newData)
    fetch("https://long-lime-fly-tux.cyclic.app/cart/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(newData)
    }).then(res => {
      console.log("tot:",res)
      toast({
        title: 'Add to cart',
        description: "Product is successfully added to cart",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }).catch(error => {
      console.error(error);
    });
  }


    return (
        <Box>
          <Navbar/>
          <Box>
        <Box>
        <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box   w='70%'  borderRadius='4px'>
        <Flex>
            <Image
            border={'1px solid #C2C2C2'}
            w={'100%'}
            margin='auto'
             
              alt={'feature image'}
              src={
                prod.images
              }
             
            />
          </Flex>
          <Stack direction='row' spacing={4} ml='40px' mt={'20px'}>
  <Button leftIcon={<BsCartDash/>} bg='#F43397' color={'white'} variant='solid' onClick={()=>{
    handleCart(prod)
    }}>
    Add to Cart
  </Button>
  <Button rightIcon={<ArrowRightIcon/>} color={'#F43397'} borderColor='#F43397' variant='outline' onClick={()=>{
    navigate("/cart/payment")
    }}>
    Buy Now
  </Button>
</Stack>
        </Box>
        <Stack spacing='4'>
        <Card>
           <CardHeader>
          <Heading size='md' color='gray'>{prod.title}</Heading>
          <Text color='black.600' fontSize='2xl' fontWeight='bold'>
          ₹{prod.price}
      </Text>
          <Badge
          mt={"15px"}
          borderRadius="full"
          px="2"
          fontSize="md"
          color={"white"}
          bgColor={
            prod.rating >= 4
              ? "rgb(3, 141, 99)"
              : prod.rating > 2
              ? "rgb(244, 182, 25)"
              : "red"
          }
        >
          {prod.rating}
          <StarIcon color={"white"} height={"10px"} />
        </Badge>
        
          </CardHeader>
         <CardBody>
         <Badge mt='-30px' color='gray'>Free Delivery</Badge>
       </CardBody>
    </Card>
    <Card>
           <CardHeader>
          <Heading size='md' color='gray'>Select Size</Heading>
          <Stack direction='row'>
            <Box w={'90px'} border={'1px solid #F43397'} borderColor='#F43397' borderRadius='20px' bgColor='#FDE9F2'>
            <Badge mb={'4px'} ml={'13px'} color='#F43397' bgColor='#FDE9F2'>Free Size</Badge>
            </Box>
          </Stack>
        
          </CardHeader>
    </Card>
    <Card>
      <Box ml={'10px'}>
    <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('black', 'yellow.300')}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2} color='gray'>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  Name:
                  </Text>{' '}
                  {prod.title}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  Fabric:
                  </Text>{' '}
                  Cotton Silk
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  Pattern:
                  </Text>{' '}
                  Solid
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Net Quantity (N):
                  </Text>{' '}
                  Single
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  rating:
                  </Text>{' '}
                  {prod.rating}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  reviews:
                  </Text>{' '}
                  {prod.reviews}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  delivery:
                  </Text>{' '}
                  {prod.delivery}{' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'} color='gray'>
                  Country of Origin:
                  </Text>{' '}
                  India{' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}  color='gray'>
                  More Information
                  </Text>
                </ListItem>
              </List>
            </Box>
    </Card>
    <Card>
           <CardHeader>
          <Heading size='md' color='gray'>Sold by</Heading>
          <Text size='md' color='gray'>ShopVibes Adda</Text>
          <Stack direction='column' spacing={4}>
  <Button leftIcon={<EmailIcon />} bg='#F43397' color={'white'} variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} color={'#F43397'} borderColor='#F43397' variant='outline'>
    Call us
  </Button>
</Stack>
          </CardHeader>
         
    </Card>
    <Card bg={'#E7EEFF'}>
         <CardBody direction='row' spacing={4}>
         <Badge mt='-10px' ml='30px' direction='row' bg={'#E7EEFF'}><IoPricetagsOutline mt='-5px'mr={'4px'} bg={'#E7EEFF'}/>Lowest Price</Badge>
         <Badge bg={'#E7EEFF'} mt='-10px' ml='30px'><BsCash mt='-5px'mr={'4px'} bg={'#E7EEFF'}/>Cash on Delivery
</Badge>
         <Badge bg={'#E7EEFF'} mt='-10px' ml='30px'><BsArrowReturnLeft  bg={'#E7EEFF'} mt='-5px'mr={'4px'}/>Returns</Badge>
       </CardBody>
    </Card>
</Stack>
          
        </SimpleGrid>
      </Container>
      </Box>
      {/* <Box ml={'9%'} maxW="xxl">
        <Hide breakpoint='(max-width: 900px)'>
        <PeopleAlsoLike prod={prod}/>
        </Hide>
      </Box> */}
      </Box>
          <Footer/>
        </Box>
    );
  }



  