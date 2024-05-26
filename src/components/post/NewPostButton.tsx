import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { Text } from "..";
import pic from "../../assets/pic.jpg";

interface Props {
  onClick: () => void;
}

const NewPostButton = ({ onClick }: Props) => {
  return (
    <Box onClick={onClick} cursor="pointer" p={4} bg="#fff" borderRadius={14}>
      <Flex align="center" justify="space-between">
        <Flex>
          <Image
            mr={3}
            borderRadius="full"
            h={7}
            w={7}
            objectFit="cover"
            src={pic}
          />
          <Text fontWeight={900} color="blue">
            What's on your mind?
          </Text>
        </Flex>
        <IconButton
          _hover={{ bg: "blue.200" }}
          aria-label="new-post"
          icon={<BiPlus />}
          bg="blue"
          borderRadius="full"
          onClick={onClick}
          size="xs"
        />
      </Flex>
    </Box>
  );
};

export default NewPostButton;
