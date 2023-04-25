import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main";
import { Box } from "@chakra-ui/react";
import About from "@/components/about";
import Experience from "@/components/experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Janvi Bajoria</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight={"70vh"} mt={24}>
        <Main />
        <About />
        <Experience />
      </Box>
    </>
  );
}