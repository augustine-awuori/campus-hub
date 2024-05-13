import { Box } from "@chakra-ui/react";

import { NewPostButton } from "../components/post";
import Post from "../components/post/index.tsx";

const PostsPage = () => {
  return (
    <Box>
      <NewPostButton onClick={() => {}} />
      {[1, 2, 3, 4].map((i) => (
        <Post key={i} />
      ))}
    </Box>
  );
};

export default PostsPage;
