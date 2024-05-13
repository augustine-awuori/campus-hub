import { Box, Flex, Image } from "@chakra-ui/react";

import { Text } from "..";
import c from "../../assets/pic.jpg";
import { ImagesGrid } from ".";

const image = "https://picsum.photos/300/500";
const reactions = ["😂", "😍", "😲", "🔥", "🙌", "😎", "😊", "😢", "🤔", "👎"];

const index = () => {
  return (
    <Box bg="#fff" mt={5} borderRadius={14} px={3} py={2}>
      <Flex align="center">
        <Image
          mr={2}
          src={c}
          w={8}
          h={8}
          objectFit="cover"
          borderRadius="full"
        />
        <Box>
          <Text fontWeight={600} color="blue" mb={0}>
            Benard Awuori
          </Text>
          <Text mb={0} fontSize="small" color="blue">
            2 Sept at 9:30 AM
          </Text>
        </Box>
      </Flex>

      <Box>
        <Text color="blue" mb={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere non,
          exercitationem dolore nisi sint inventore!
        </Text>
        <ImagesGrid images={[image, image, image]} />
      </Box>
    </Box>
  );
};

export default index;
