import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuItemProps,
  Flex,
} from "@chakra-ui/react";
import { BiLogIn, BiLogOut, BiUser, BiUserPlus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IconType } from "react-icons";
import { BsGoogle } from "react-icons/bs";

import { fontFamily } from "../utils/data";
import { Text } from ".";
import { useUser } from "../hooks";
import { MenuContent } from "./common";
import auth from "../services/auth";

interface ItemProps extends MenuItemProps {
  Icon: IconType;
}

const Item = ({ children, Icon, ...otherProps }: ItemProps) => (
  <MenuItem fontFamily={fontFamily} {...otherProps}>
    <Flex align="center" letterSpacing=".59px" justify="space-between" w="100%">
      <Text fontSize="sm">{children}</Text>
      <Icon />
    </Flex>
  </MenuItem>
);

const UserButton = () => {
  const { user } = useUser();

  const login = async () => await auth.signInWithGoogle();

  const logout = async () => await auth.signOut();

  if (user)
    return (
      <Menu>
        <MenuButton>
          <Image
            borderRadius="full"
            cursor="pointer"
            h={9}
            objectFit="cover"
            src={user.photoURL || ""}
            w={9}
          />
        </MenuButton>

        <MenuList>
          <Flex direction="column" alignItems="center">
            <Image
              borderRadius="full"
              h={20}
              objectFit="cover"
              src={user.photoURL || ""}
              w={20}
              mb={1}
            />
            <Text mb={1} fontWeight={600}>
              {user.displayName}
            </Text>
          </Flex>
          <MenuDivider />
          <Item Icon={BiUser}>View Profile</Item>
          <Item Icon={CiSettings}>Settings</Item>
          <MenuDivider />
          <Item Icon={BiLogOut} onClick={logout}>
            Logout
          </Item>
        </MenuList>
      </Menu>
    );

  return (
    <MenuContent
      Button={
        <IconButton
          borderRadius="full"
          icon={<BiUserPlus size={20} />}
          variant="ghost"
          aria-label="link"
        />
      }
      data={[
        {
          label: "Login",
          icon: <BiLogIn />,
          rightIcon: <BsGoogle />,
          onClick: () => login(),
        },
      ]}
      onSelectItem={(item) => item?.onClick?.()}
    />
  );
};

export default UserButton;
