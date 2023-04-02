import {Box,Container,Text,SimpleGrid,Stack,Flex,useColorModeValue,Image} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <>
            <Box mt="50px"
                bg='rgb(249,249,249)'
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'7xl'} py={10}      justifyContent={"space-between"}>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4,lg:5 }} spacing={8}>
                        <Stack align={'flex-start'}>
                            <ListHeader>Shop Non-Stop on Meesho</ListHeader>
                            <Text >Trusted by more than 1 Crore Indians</Text>
                            <Text >Cash on Delivery | Free Delivery</Text>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <ListHeader>Craeer</ListHeader>
                            <Text >About Us</Text>
                            <Text >Become a supplier</Text>
                            <Text >Releases</Text>
                            <Text >Hall of Fame</Text>
                            <Text >Contact Us</Text>
                            <Text >Partners</Text>
                        </Stack>


                        <Stack align={'flex-start'}>
                            <ListHeader>Legal and Policies</ListHeader>
                            <Text >Meesho Tech Blog</Text>
                            <Text >Privacy Policy</Text>
                            <Text >Terms of Service</Text>
                            <Text >Notices and Returns</Text>
                        </Stack>



                        <Stack align={'flex-start'}>
                            <ListHeader>Reach out to us</ListHeader>
                            <Flex gap="20px">
                                <Image src={"https://images.meesho.com/images/pow/facebook.png"} />
                                <Image src={"https://images.meesho.com/images/pow/instagram.png"} />
                                <Image src={"https://images.meesho.com/images/pow/youtube.png"} />
                                <Image src={"https://images.meesho.com/images/pow/linkedin.png"} />
                                <Image src={"https://images.meesho.com/images/pow/twitter.png"} />
                            </Flex>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <ListHeader>Contact Us</ListHeader>
                            <Text >Fashnear Technologies Private Limited,</Text>
                            <Text >CIN: U74900KA2015PTC082263 06-105-B, 06-102, (138 Wu)</Text>
                            <Text >Varthur Hobli, Bengaluru-560103,</Text>
                            <Text >Karnataka, India</Text>
                            <Text >E-mail address: query@meesho.com© 2015-2022 Meesho.com</Text>
                        </Stack>

                    </SimpleGrid>
                </Container>

            </Box>
            
        </>
    );
}
