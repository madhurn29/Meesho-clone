import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Image,
  Switch,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { Link, Route } from "react-router-dom";
import AdminRoutes from "../Routes/AdminRoutes";
import messhoImage from "../Components/Images/meesho.png";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, to: "/dashboard" },
  { name: "Store", icon: FiTrendingUp, to: "/store" },
  { name: "Add Products", icon: FiCompass, to: "/addproducts" },
];

const NavItem = ({ icon, to, children }) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none" }}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex alignItems="center">
        <HStack spacing={2} pr={10} _hover={{ color: "rgb(187, 144, 15)" }}>
          <Icon as={icon} fontSize="l" />
          <Text fontWeight="small">{children}</Text>
        </HStack>
      </Flex>
    </Link>
  );
};

export default function AdminNavbar({ children, heading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headings = heading;
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      w="100%"
      px={{ base: 4 }}
      py={4}
      alignItems="center"
    >
      <Flex alignItems="center">
        <Link to="/dashboard">
          <Box>
            <Image
              marginTop="8px"
              marginLeft={"30px"}
              marginRight={"70px"}
              src={messhoImage}
            />
          </Box>
        </Link>
      </Flex>

      <Flex display={{ base: "none", md: "flex" }} alignItems="center">
        {LinkItems.map((link, index) => (
          <NavItem key={link.name} to={link.to} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>

      <Spacer />

      <Flex alignItems="center">
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <NavbarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

const NavbarContent = ({ onClose }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "xs" }}
      h="full"
      position="fixed"
      {...(onClose ? { left: 0 } : { left: "-100%" })}
      top={0}
      pt={14}
      pb={6}
      zIndex={20}
      overflowY="auto"
    >
      <Flex
        mb={6}
        pl={4}
        alignItems="center"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Image
          marginTop="8px"
          w="70px"
          h="70px"
          src="https://i.ibb.co/MPQNtrm/meesho.png"
        />
        <CloseButton
          aria-label="Close menu"
          onClick={onClose}
          justifySelf="start"
        />
      </Flex>
      <VStack spacing={3} mt={6} alignItems="flex-start">
        {LinkItems.map((link) => (
          <Link key={link.name} to={link.to} onClick={onClose} w="full">
            <HStack pl={4} w="full" spacing={2} align="center">
              <Icon as={link.icon} fontSize="lg" />
              <Text fontWeight="medium" flexGrow="1">
                {link.name}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

{
  /* <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FiChevronDown />}
            variant="outline"
            mr={2}
          />
          <MenuList>
            {LinkItems.map((link) => (
              <MenuItem key={link.name} to={link.to} as={Link}>
                <Icon mr={2} as={link.icon} />
                {link.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu> */
}
