import { Box, Flex, Image } from "@chakra-ui/react";

import { Text } from "..";
import pic from "../../assets/pic.jpg";

interface Props {
  onClick: () => void;
}

const NewPostButton = ({ onClick }: Props) => {
  return (
    <Box onClick={onClick} cursor="pointer" p={4} bg="#fff" borderRadius={14}>
      <Flex align="center">
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
    </Box>
  );
};

export default NewPostButton;
