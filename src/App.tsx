import { useEffect } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  googleAuth,
  saveUserWhenIsNot,
  signInWithGoogle,
} from "./services/auth";
import { NavBar } from "./components";

function App() {
  const [user] = useAuthState(googleAuth);

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
        <Button onClick={async () => await signInWithGoogle()}>
          Google in
        </Button>
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
