import { useEffect } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { saveUserWhenIsNot, signInWithGoogle } from "./services/auth";
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
        {!user && (
          <Button onClick={async () => await signInWithGoogle()}>
            Google in
          </Button>
        )}
        {user && (
          <Flex>
            <Image
              src={user.photoURL || ""}
              w={50}
              h={50}
              borderRadius="full"
            />
            <Box>
              <Text>{user.email}</Text>
              <Text>{user.displayName}</Text>
            </Box>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default App;
