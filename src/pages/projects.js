import {
  Stack,
  Text,
  Heading,
  IconButton,
  useColorModeValue,
  Box,
  HStack,
} from "@chakra-ui/react";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";

function Projects() {
  return (
    <>
      <Heading as={"h1"} size="2xl" textAlign={"center"} m={"8"} color="white">
        projects 🚀
      </Heading>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Boost your conversion rate
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
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Text>
          <Stack mt={4} direction={"row"} spacing={4} align={"center"}>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Projects;
