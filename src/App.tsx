import { useEffect } from "react";
import { Button, Image, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  saveUserWhenIsNot,
  googleAuth,
  signInWithGoogle,
} from "./services/auth";

function App() {
  const [user] = useAuthState(googleAuth);

  useEffect(() => {
    saveUserWhenIsNot(user);
  }, [user]);

  return (
    <>
      <Text fontSize={50} fontFamily="quicksand" textAlign="center">
        Campus Hub
      </Text>
      <Button onClick={async () => await signInWithGoogle()}>Google in</Button>
      {user && (
        <>
          <Image src={user.photoURL || ""} w={50} h={50} />
          <Text>{user.displayName}</Text>
        </>
      )}
    </>
  );
}

export default App;
