import { navData } from "@/data/navData";
import { Button, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

function Navbar() {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack
      justify="flex-end"
      spacing="8"
      color={"white"}
      bgGradient={useColorModeValue(
        "linear-gradient(147deg, #000000 0%, #2c3e50 84%)",
        "linear-gradient(147deg, #FFFFFF 0%, #2c3e50 84%)"
      )}
      fontSize="lg"
      px={6}
      py={2}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      }
      borderRadius={"25px"}
    >
      <Link href="\" display={["none", "block"]}>
        <Heading>👩‍💻</Heading>
      </Link>
      <Spacer />
      {navData.map((items, key) => {
        return (
          <Link
            href={items.url}
            key={key}
            _hover={{
              color: "white",
              transform: "scale(1.2)",
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
        size="md"
        borderRadius={"25px"}
        icon={useColorModeValue(<BsMoon />, <BsSun />)}
        onClick={toggleColorMode}
      />
    </HStack>
  );
}

export default Navbar;
