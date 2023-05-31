import React, { useState } from "react";
import { Spinner, Box, Heading, Flex } from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import BlogPostCard from "@/components/blogpostcard";

//GraphQL query
const query = `
    {
      user(username: "janvi01") {
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
        <Heading as={"h1"} size={["xl", "2xl"]} textAlign={"center"} mb={8}>
          give a read to my blogs 💫
        </Heading>
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
