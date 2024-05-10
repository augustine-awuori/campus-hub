import { IconButton } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";

const UserButton = () => {
  return (
    <IconButton
      borderRadius="full"
      icon={<BiUser />}
      variant="ghost"
      aria-label="link"
    />
  );
};

export default UserButton;
