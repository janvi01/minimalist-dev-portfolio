import { Box, useColorModeValue, Heading } from "@chakra-ui/react";
import Image from "next/image";

const BlogPostCard = ({ post }) => {
  const cardcolor = useColorModeValue("white", "gray.900");
  return (
    <Box
      maxW={"420px"}
      bg={cardcolor}
      rounded={"md"}
      boxShadow={
        "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
      }
      mx={[0, 6]}
      my={[4, 6]}
      overflow={"hidden"}
    >
      <Image src={post.coverImage} alt={post.title} width={420} height={320} />
      <Heading fontSize={"xl"} fontFamily={"body"} p={6}>
        {post.title}
      </Heading>
    </Box>
  );
};

export default BlogPostCard;
