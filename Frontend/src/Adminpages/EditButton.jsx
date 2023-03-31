import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const buttonStyles = {
  display: "inline-block",
  padding: "0.2rem 1.0rem",
  border: "1px solid",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
};

const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.2,
  },
};

const EditButton = ({ onOpen }) => {
  return (
    <motion.div whileHover={hoverEffect}>
      <Box
        onClick={() => {
          onOpen();
        }}
        as="button"
        ml="2"
        color="teal.500"
        fontSize="sm"
        sx={buttonStyles}
      >
        Edit
      </Box>
    </motion.div>
  );
};

const DeleteButton = (handleDelete) => {
  return (
    <motion.div whileHover={hoverEffect}>
      <Box
        onClick={() => handleDelete()}
        as="button"
        ml="2"
        color="red.700"
        fontSize="sm"
        sx={buttonStyles}
      >
        Delete
      </Box>
    </motion.div>
  );
};

export { EditButton, DeleteButton };
