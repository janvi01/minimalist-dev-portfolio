import { socialsData } from "@/data/socialsData";
import { HStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { AttentionSeeker } from "react-awesome-reveal";

function Footer() {
  const hovercolor = useColorModeValue("black", "white");
  return (
    <HStack
      justify="center"
      spacing="8"
      color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
      fontSize="lg"
      p={2}
      borderRadius={"25px"}
      wrap="wrap"
    >
      <AttentionSeeker effect="flash" duration={7000}>
        {socialsData.map((items, key) => {
          return (
            <HStack
              key={key}
              _hover={{
                color: hovercolor,
                transform: "translateY(-4px)",
              }}
              cursor={"pointer"}
            >
              <Link
                href={items.url}
                target="_blank"
                _hover={{
                  color: hovercolor,
                }}
              >
                {items.social}
              </Link>
              <Icon as={items.icon} />
            </HStack>
          );
        })}
      </AttentionSeeker>
    </HStack>
  );
}

export default Footer;
