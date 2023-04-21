import {
  Box,
  Flex,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { experienceData } from "@/data/experienceData";

function Experience() {
  return (
    <Flex
      direction={"column"}
      bgColor={"black"}
      m="8"
      justifyContent={"left"}
      color={"white"}
    >
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
            <UnorderedList color={"whiteAlpha.800"}>
              {items.description.map((itemmslist, key) => {
                return <ListItem>{itemmslist}</ListItem>;
              })}
            </UnorderedList>
          </Box>
        );
      })}
    </Flex>
  );
}

export default Experience;
