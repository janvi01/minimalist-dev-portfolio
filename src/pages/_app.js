// pages/_app.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  ChakraProvider,
  Box,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "../../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Box p={["4", "8", "16"]} minH={"100vh"} w={["100%", "90%", "70%"]}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
