import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import { saveUserWhenIsNot } from "./services/auth";
import { NavBar } from "./components";
import { useUser } from "./hooks";

function App() {
  const { user } = useUser();

  useEffect(() => {
    saveUserWhenIsNot(user);
  }, [user]);

  return (
    <>
      <NavBar />
      <Box mt="4rem">
        <Text fontSize={50} fontFamily="quicksand" textAlign="center">
          Campus Hub
        </Text>
      </Box>
    </>
  );
}

export default App;
