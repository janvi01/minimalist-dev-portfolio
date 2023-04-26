import { socialsData } from "@/data/socialsData";
import { HStack, Icon, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack
      justify="flex-start"
      spacing="8"
      color={"whiteAlpha.700"}
      fontSize="lg"
      p={2}
      borderRadius={"25px"}
    >
      {socialsData.map((items, key) => {
        return (
          <HStack
            key={key}
            _hover={{
              color: "white",
            }}
          >
            <Link
              href={items.url}
              _hover={{
                color: "white",
              }}
            >
              {items.social}
            </Link>
            <Icon as={items.icon} />
          </HStack>
        );
      })}
    </HStack>
  );
}

export default Footer;
