import {
  Box,
  Flex,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { experienceData } from "@/data/experienceData";
import { Fade } from "react-awesome-reveal";

function Experience() {
  return (
    <Flex
      direction={"column"}
      m="8"
      justifyContent={"left"}
      color={useColorModeValue("black", "white")}
    >
      <Fade delay={1e3} cascade damping={1e-1}>
        <Heading size={"lg"} mb="4">
          experience ✨
        </Heading>
        {experienceData.map((items, key) => {
          return (
            <Box mb="8">
              <HStack justify={"space-between"} fontSize="2xl" mb="2">
                <Text>
                  {items.company}, <i>{items.position}</i>
                </Text>
                <Text fontStyle={"italic"} fontSize="xl">
                  {items.startingDate} - {items.endingDate}
                </Text>
              </HStack>
              <UnorderedList
                color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              >
                {items.description.map((itemmslist, key) => {
                  return <ListItem>{itemmslist}</ListItem>;
                })}
              </UnorderedList>
            </Box>
          );
        })}
      </Fade>
    </Flex>
  );
}

export default Experience;
