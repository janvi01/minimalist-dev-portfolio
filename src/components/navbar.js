import { HStack } from "@chakra-ui/react";
import Link from "next/link";
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
      <Link
        href="#"
        _hover={{
          color: "white",
        }}
      >
        home
      </Link>
      <Link href="#">projects</Link>
      <Link href="#">blog</Link>
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
