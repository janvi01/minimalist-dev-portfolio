import { Heading, Stack, Image, VStack } from "@chakra-ui/react";

function Main() {
  return (
    <Stack
      direction={["column", "row"]}
      m="8"
      justify="flex-start"
      spacing="8"
      color={"white"}
    >
      <Image
        boxSize={"20"}
        borderRadius="50%"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
      ></Image>
      <VStack>
        <Heading as={"h1"} size="2xl">
          hi there 👋🏻, I am Janvi 🌻
        </Heading>
        <Heading as={"h6"} size="md">
          a passionate frontend developer and an open sourcerer
        </Heading>
      </VStack>
    </Stack>
  );
}

export default Main;
