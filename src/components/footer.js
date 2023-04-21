import { socialsData } from "@/data/socialsData";
import { HStack, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack color={"whiteAlpha.800"} m={8}>
      {socialsData.map((items, key) => {
        return <Link key={key}>{items.social}</Link>;
      })}
    </HStack>
  );
}

export default Footer;
