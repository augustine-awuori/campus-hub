import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GrGroup } from "react-icons/gr";

import { DesktopNav, Text, UserButton } from ".";
import logo from "../assets/react.svg";

interface Props {}

export default function WithSubNav({}: Props) {
  const navigate = useNavigate();

  return (
    <Box
      bgColor="inherit"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      // bg={color}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        justifyContent="space-between"
        // backgroundColor={color}
      >
        <Flex
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          align="center"
        >
          <IconButton
            // onClick={() => navigate("/about-app")}
            borderRadius="full"
            icon={<GrGroup />}
            variant="ghost"
            aria-label="link"
          />
        </Flex>
        <Flex
          align="center"
          cursor="pointer"
          // onClick={() => navigate("/")}
        >
          <Image src={logo} w={5} />
          <Text
            mx={1.5}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize={22}
          >
            Campus Hub
          </Text>
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify="center"
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <DesktopNav />
        </Flex>

        <Flex align="center" ml={{ base: 0, md: 4 }}>
          <UserButton />
        </Flex>
      </Flex>
    </Box>
  );
}
