import React from "react";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        isIndeterminate
        color="teal.500"
        size="60px"
        thickness="6px"
      />
    </Box>
  );
};

export default LoadingPage;
