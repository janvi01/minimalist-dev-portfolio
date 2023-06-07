import React, { useState } from "react";
import {
  Spinner,
  Box,
  Flex,
  Link,
  IconButton,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import BlogPostCard from "@/components/blogpostcard";
import { BsArrowUpRight } from "react-icons/bs";

//GraphQL query
const query = `
    {
      user(username: "hashnode") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

function Blogposts() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();
    setposts(ApiResponse.data.user.publication.posts.slice(0, 4));
    setloading(false);
  };

  fetchPosts();

  if (loading) {
    return (
      <Flex justify={"center"} minHeight={"70vh"} mt="20" mb="10">
        <Spinner thickness="4px" size="xl" />
      </Flex>
    );
  }

  return (
    <Box minHeight={"70vh"} mt="20" mb="10">
      <AttentionSeeker effect="bounce">
        <VStack mb={8} textAlign={"center"}>
          <Text fontSize={"lg"}>
            I share my tech knowledge and experiences in the form of blog post
            ✨, check them out below. 👇
          </Text>
          <Stack direction={["column", "row"]}>
            <Text fontSize={"lg"}>
              To view all my articles, visit my Blog Page{" "}
            </Text>
            <Link href="#" target="_blank">
              <IconButton
                aria-label="blog-link"
                size={"xs"}
                variant={"outline"}
                colorScheme={"yellow"}
                icon={<BsArrowUpRight />}
              />
            </Link>
          </Stack>
        </VStack>
      </AttentionSeeker>
      <Fade delay={1e3} cascade damping={1e-1}>
        <Flex
          direction={["column", "row"]}
          wrap="wrap"
          justifyContent={"center"}
        >
          {posts.map((post, index) => (
            <a key={index} href={`https://janvi01.hashnode.dev/${post.slug}`}>
              <BlogPostCard post={post} />
            </a>
          ))}
        </Flex>
      </Fade>
    </Box>
  );
}

export default Blogposts;
