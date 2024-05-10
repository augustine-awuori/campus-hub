import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { saveUserWhenIsNot } from "./services/auth";
import { NavBar } from "./components";
import { useUser } from "./hooks";
import { PostsPage } from "./pages";

function App() {
  const { user } = useUser();

  useEffect(() => {
    saveUserWhenIsNot(user);
  }, [user]);

  return (
    <Box bg="#ccc" h="100vh">
      <NavBar />
      <Box pt="5rem" maxW="500px" mx="auto" px={{ base: 7, md: 0 }}>
        <PostsPage />
      </Box>
    </Box>
  );
}

export default App;
