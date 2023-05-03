import { greetings } from "@/data/homeData";
import {
  Heading,
  Stack,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AttentionSeeker } from "react-awesome-reveal";

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
        borderRadius="50%"
        boxSize={"32"}
        ml={["30%", "0"]}
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
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
