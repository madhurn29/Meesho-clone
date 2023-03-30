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
  } from '@chakra-ui/react';

  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoPricetagsOutline,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowRightIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';
import { BsArrowReturnLeft, BsCartDash, BsCash } from 'react-icons/bs';
  
//   interface FeatureProps {
//     text: string;
//     iconBg: string;
//     icon?: ReactElement;
//   }
//   delivery
// id
// images
// price
// rating
// reviews
// title
  
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
  
  export default function SingleProduct() {

    const { id } = useParams();
    console.log("id:",id)
  const product = useSelector((store) =>{
    console.log("store.Productreducer.product:",store.Productreducer.product)
    return store.Productreducer.product
  } );
  console.log("product:",product)
  const [prod, setProd] = useState({});
  console.log("prod:",prod)

  useEffect(() => {
    let prodData = product.find((el) => el.id === id);
    prodData && setProd(prodData);
  }, []);
//border={'1px solid #C2C2C2'}
    return (
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
  <Button leftIcon={<BsCartDash/>} bg='#F43397' color={'white'} variant='solid'>
    Add to Cart
  </Button>
  <Button rightIcon={<ArrowRightIcon/>} color={'#F43397'} borderColor='#F43397' variant='outline'>
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
           <CardHeader>
          {/* <Heading size='md' color='gray'>{prod.title}</Heading> */}
          {/* <Text color='black.600' fontSize='2xl' fontWeight='bold'>
          {prod.price}
      </Text> */}
          {/* <Badge
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
        </Badge> */}
        
          </CardHeader>
         <CardBody direction='row' spacing={4}>
         <Badge mt='-60px' ml='30px' direction='row'><IoPricetagsOutline mt='-5px'mr={'4px'}/>Lowest Price</Badge>
         <Badge mt='-60px' ml='30px'><BsCash mt='-5px'mr={'4px'}/>Cash on Delivery
</Badge>
         <Badge mt='-60px' ml='30px'><BsArrowReturnLeft mt='-5px'mr={'4px'}/>Returns</Badge>
       </CardBody>
    </Card>
</Stack>
          
        </SimpleGrid>
      </Container>
      </Box>
    );
  }



  /*
  <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>{prod.title}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                prod.image
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
  */