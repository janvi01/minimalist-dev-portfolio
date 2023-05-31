// pages/_app.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import theme from "../../theme";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={styles.app}>
        <VStack>
          <Box p={["4", "8", "16"]} minH={"100vh"} w={["100%", "90%", "70%"]}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </VStack>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
