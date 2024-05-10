import { useAuthState } from "react-firebase-hooks/auth";

import { googleAuth } from "../services/auth";

const useUser = () => {
  const [user] = useAuthState(googleAuth);

  return { user };
};

export default useUser;
