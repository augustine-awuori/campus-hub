import {
  Box,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { fontFamily, navItems } from "../utils/data";

import DesktopSubNav from "./DesktopSub";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={4}>
      {navItems.map(({ children, href, Icon, label }) => (
        <Box key={label} position="relative" px={5}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Flex
                py={1.5}
                cursor="pointer"
                direction="column"
                alignItems="center"
              >
                <Icon size={15} />
                <Box
                  onClick={() => navigate(href)}
                  fontFamily={fontFamily}
                  fontSize="medium"
                  fontWeight={500}
                  color={linkColor}
                  _hover={{ textDecoration: "none", color: linkHoverColor }}
                >
                  {label}
                </Box>
              </Flex>
            </PopoverTrigger>

            {children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
