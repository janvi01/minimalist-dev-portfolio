import { Flex, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex direction={"column"} m="8" justifyContent={"left"} color={"white"}>
      <Heading size={"lg"} mb="4">
        about ✨
      </Heading>
      <Text>
        I am a software engineer with a focus on front-end engineering and
        problem solving. I possess a strong ability to communicate and ability
        to express ideas clearly and concisely. <br />
        <br />I specialized in Frontend-development, Technical Writing, and
        Creative Design. I am an Open-source enthusiast with experience of
        participating in various open-source programs like Outreachy, GSSoC,
        Hacktoberfest, etc. and contributing to well-known Free Open Source
        Software.
      </Text>
    </Flex>
  );
}

export default About;
