import { greetings } from "@/data/homeData";
import {
  Heading,
  Stack,
  VStack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { AttentionSeeker } from "react-awesome-reveal";
import NextImage from "next/image";
import dp from "../assets/dp.png";

function Main() {
  return (
    <Stack
      direction={["column", "row"]}
      m={["4", "8"]}
      pb="6"
      justify="flex-start"
      spacing="8"
      textAlign={"center"}
      color={useColorModeValue("black", "white")}
    >
      <Image
        as={NextImage}
        src={dp}
        borderRadius="50%"
        width={28}
        height={32}
        ml={["30%", "0"]}
        alt="displaypicture"
      ></Image>
      <VStack>
        <AttentionSeeker effect="pulse">
          <Heading as={"h1"} size="3xl" lineHeight={"shorter"}>
            {greetings.title}
          </Heading>
          <Heading as={"h6"} size="md">
            {greetings.subtitle}
          </Heading>
        </AttentionSeeker>
      </VStack>
      <AttentionSeeker effect="tada" delay={1000} duration={3000}>
        <Heading as={"h1"} size="4xl" mt={["0", "5"]}>
          👋🏻
        </Heading>
      </AttentionSeeker>
    </Stack>
  );
}

export default Main;
