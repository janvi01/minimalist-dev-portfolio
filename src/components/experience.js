import {
  Flex,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

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
      <HStack justify={"space-between"} fontSize="2xl" mb="2">
        <Text>position, company Name</Text>
        <Text>starting - ending date</Text>
      </HStack>
      <UnorderedList>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod et dolore magna
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod et dolore magna
        </ListItem>
      </UnorderedList>
    </Flex>
  );
}

export default Experience;
