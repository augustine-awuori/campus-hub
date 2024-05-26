import { Box, Flex, Image } from "@chakra-ui/react";

import { Text } from "..";
import avatar from "../../assets/pic.jpg";
import EngagementPanel from "./EngagementPanel";

const image = "https://picsum.photos/300/500";

const index = () => {
  return (
    <Box bg="#fff" mt={5} borderRadius={14} px={3} py={2}>
      <Flex align="center">
        <Image
          mr={2}
          src={avatar}
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

      <Box mt={1}>
        <Text color="gray.500" mb={2} fontSize={12}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere non,
          exercitationem dolore nisi sint inventore!
        </Text>
        <Image
          src={image}
          alt="Image"
          width="100%"
          height={200}
          objectFit="contain"
          borderRadius={10}
        />
        <EngagementPanel
          comments={5}
          likes={1}
          onComment={console.log}
          onLike={console.log}
        />
      </Box>
    </Box>
  );
};

export default index;
