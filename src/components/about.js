import { about } from "@/data/homeData";
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <Flex
      direction={"column"}
      ml={["4", "8"]}
      mr={["4", "8"]}
      mb="12"
      justifyContent={"left"}
      color={useColorModeValue("black", "white")}
    >
      <Fade delay={1e3} cascade damping={1e-1}>
        <Heading size={"xl"} mb="4">
          about ✨
        </Heading>
        <Text>
          {about.about_para_1} <br />
          <br />
          {about.about_para_2}
        </Text>
      </Fade>
    </Flex>
  );
}

export default About;
