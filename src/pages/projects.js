import { projectsData } from "@/data/projectsData";
import styles from "../styles/Home.module.css";
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
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <Box minHeight={"70vh"}>
      <Heading as={"h1"} size="2xl" textAlign={"center"} m={"8"} color="white">
        projects 🚀
      </Heading>
      <Flex direction={["column", "row"]} wrap="wrap">
        {projectsData.map((items, key) => {
          return (
            <Box
              className={styles.projectsCard}
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              rounded={"md"}
              p={6}
              m={6}
              overflow={"hidden"}
            >
              <Fade delay={1e3} cascade damping={1e-1}>
                <Stack direction={"row"} justifyContent="space-between" mb="2">
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
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
              </Fade>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Projects;
