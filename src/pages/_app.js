// pages/_app.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <VStack bgColor={"black"}>
        <Box
          bgColor={"black"}
          p={["4", "8", "16"]}
          minH={"100vh"}
          w={["100%", "90%", "70%"]}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
