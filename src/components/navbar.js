import { navData } from "@/data/navData";
import { HStack, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiSun } from "react-icons/bi";

function Navbar() {
  return (
    <HStack
      bgColor={"black"}
      justify="flex-end"
      spacing="8"
      color={"whiteAlpha.700"}
    >
      {navData.map((items, key) => {
        return (
          <Link
            href="#"
            key={key}
            _hover={{
              color: "white",
            }}
          >
            {items.navItem}
          </Link>
        );
      })}
      <IconButton
        aria-label="Mode Change"
        variant="outline"
        colorScheme="black"
        size="lg"
        icon={<BiSun />}
      />
    </HStack>
  );
}

export default Navbar;
