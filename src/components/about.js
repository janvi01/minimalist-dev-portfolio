import { Flex, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex
      direction={"column"}
      bgColor={"black"}
      m="8"
      justifyContent={"left"}
      color={"white"}
    >
      <Heading size={"lg"} mb="4">
        about ✨
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Flex>
  );
}

export default About;
