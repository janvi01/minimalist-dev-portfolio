// pages/_app.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <VStack
        bgColor={"black"}
        bgGradient={
          "linear-gradient(147deg, #000000 0%, #000000 50%, #2c3e50 84%)"
        }
      >
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
