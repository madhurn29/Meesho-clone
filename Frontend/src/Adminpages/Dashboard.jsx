import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  IconButton,
  Box,
  Text,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  TableCaption,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import AdminNavbar from "./AdminNavbar";
import LoadingPage from "./LoadingPage";
import { FiUser, FiBox, FiTrendingUp } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalProducts = 347;
  const highestSellingProduct = "Womens-Ethnic";

  useEffect(() => {
    axios.get("https://long-lime-fly-tux.cyclic.app/user").then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://long-lime-fly-tux.cyclic.app/user/delete/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      });
  };

  return (
    <>
      <AdminNavbar />
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100%"
        bgGradient="linear(to-br, #97b06a, #aff0e6)"
        marginTop="6"
      >
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4} height="100%">
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            bg="white"
          >
            <Box bg="teal.500" px={4} py={3}>
              <Flex alignItems="center">
                <Icon as={FiUser} fontSize="2xl" color="white" mr={2} />
                <Heading color="white" size="md" fontWeight="semibold">
                  Total Users
                </Heading>
              </Flex>
            </Box>
            <Box px={4} py={5}>
              <Flex alignItems="center" justifyContent="center">
                <Icon as={FiUser} fontSize="4xl" color="teal.500" mr={2} />
                <Text fontSize="4xl" fontWeight="bold" color="teal.500">
                  {users.length}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            bg="white"
          >
            <Box bg="purple.500" px={4} py={3}>
              <Flex alignItems="center">
                <Icon as={FiBox} fontSize="2xl" color="white" mr={2} />
                <Heading color="white" size="md" fontWeight="semibold">
                  Total Products
                </Heading>
              </Flex>
            </Box>
            <Box px={4} py={5}>
              <Flex alignItems="center" justifyContent="center">
                <Icon as={FiBox} fontSize="4xl" color="purple.500" mr={2} />
                <Text fontSize="4xl" fontWeight="bold" color="purple.500">
                  {totalProducts}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            bg="white"
          >
            <Box bg="orange.500" px={4} py={3}>
              <Flex alignItems="center">
                <Icon as={FiTrendingUp} fontSize="2xl" color="white" mr={2} />
                <Heading color="white" size="md" fontWeight="semibold">
                  Highest Selling Product
                </Heading>
              </Flex>
            </Box>
            <Box px={4} py={5}>
              <Flex alignItems="center" justifyContent="center">
                <Icon
                  as={FiTrendingUp}
                  fontSize="4xl"
                  color="orange.500"
                  mr={2}
                />
                <Text fontSize="xl" fontWeight="bold" color="orange.500">
                  {highestSellingProduct}
                </Text>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <Table variant="simple" marginTop="8" w="80%" m="auto">
          <TableCaption
            placement="top"
            fontWeight="bold"
            fontSize="2xl"
            marginBottom="8"
          >
            User's Details
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontWeight="bold" fontSize="lg">
                First Name
              </Th>
              <Th fontWeight="bold" fontSize="lg">
                Last Name
              </Th>
              <Th fontWeight="bold" fontSize="lg">
                Phone No.
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.phoneNo}</Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="Delete user"
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete(user.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default Dashboard;
