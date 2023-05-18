import {
  Box,
  Flex,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { experienceData } from "@/data/experienceData";
import { Fade } from "react-awesome-reveal";
import { BsArrowUpRight } from "react-icons/bs";

function Experience() {
  const ulcolor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  return (
    <Flex
      direction={"column"}
      m={["4", "8"]}
      justifyContent={"left"}
      color={useColorModeValue("black", "white")}
    >
      <Fade delay={1e3} cascade damping={1e-1}>
        <Heading size={"xl"} mb="4">
          experience ✨
        </Heading>
        {experienceData.map((items, key) => {
          return (
            <Box mb="8" key={key}>
              <HStack justify={"space-between"} fontSize="2xl" mb="2">
                <HStack>
                  <Text fontWeight={"bold"} fontSize="2xl">
                    {items.company},
                  </Text>
                  <Text fontStyle={"italic"} fontSize="xl">
                    {items.position}
                  </Text>
                  <Link href={items.refLink}>
                    <IconButton
                      aria-label="reference"
                      size={"sm"}
                      variant="outline"
                      colorScheme={"yellow"}
                      icon={<BsArrowUpRight />}
                    />
                  </Link>
                </HStack>
                <Text fontStyle={"italic"} fontSize="xl">
                  {items.startingDate} - {items.endingDate}
                </Text>
              </HStack>
              <UnorderedList color={ulcolor}>
                {items.description.map((itemmslist, key) => {
                  return <ListItem key={key}>{itemmslist}</ListItem>;
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
