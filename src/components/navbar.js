import { navData } from "@/data/navData";
import { HStack, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiSun } from "react-icons/bi";

function Navbar() {
  return (
    <HStack justify="flex-end" spacing="8" color={"whiteAlpha.700"} bgGradient={"linear-gradient(147deg, #000000 0%, #2c3e50 84%)"} fontSize="lg" p={2} borderRadius={"25px"}>
      {navData.map((items, key) => {
        return (
          <Link
            href={items.url}
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
        size="md" 
        borderRadius={"25px"}
        icon={<BiSun />}
      />
    </HStack>
  );
}

export default Navbar;
