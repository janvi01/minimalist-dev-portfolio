import { socialsData } from "@/data/socialsData";
import { HStack, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiSun } from "react-icons/bi";

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
          <Link
            href={items.url}
            key={key}
            _hover={{
              color: "white",
            }}
          >
            {items.social}
          </Link>
        );
      })}
    </HStack>
  );
}

export default Footer;
