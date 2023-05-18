import { projectsData } from "@/data/projectsData";
import {
  Stack,
  Text,
  Heading,
  IconButton,
  useColorModeValue,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

function Projects() {
  const cardcolor = useColorModeValue("white", "gray.900");
  const namecolor = useColorModeValue("gray.700", "white");
  return (
    <Box minHeight={"70vh"} mt="20" mb="10">
      <AttentionSeeker effect="bounce">
        <Heading
          as={"h1"}
          size="2xl"
          textAlign={"center"}
          m={"8"}
          color="white"
        >
          projects 🚀
        </Heading>
      </AttentionSeeker>
      <Fade delay={1e3} cascade damping={1e-1}>
        <Flex direction={["column", "row"]} wrap="wrap">
          {projectsData.map((items, key) => {
            return (
              <Box
                key={key}
                maxW={"445px"}
                w={"full"}
                bg={cardcolor}
                rounded={"md"}
                boxShadow={
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
                }
                p={6}
                m={6}
                overflow={"hidden"}
              >
                <Stack direction={"row"} justifyContent="space-between" mb="2">
                  <Heading
                    color={namecolor}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {items.projectname}
                  </Heading>
                  <HStack>
                    <IconButton
                      aria-label="Mode Change"
                      variant="outline"
                      colorScheme="black"
                      size={"sm"}
                      icon={<BsGithub />}
                    />
                    <IconButton
                      aria-label="Mode Change"
                      variant="outline"
                      colorScheme="black"
                      size={"sm"}
                      icon={<BsArrowUpRight />}
                    />
                  </HStack>
                </Stack>
                <Text color={"gray.500"}>{items.description}</Text>
                <Stack mt={4} direction={"row"} spacing={4} align={"center"}>
                  {items.techstack.map((data, key) => {
                    return (
                      <Text
                        key={key}
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                      >
                        {data}
                      </Text>
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
        </Flex>
      </Fade>
    </Box>
  );
}

export default Projects;
