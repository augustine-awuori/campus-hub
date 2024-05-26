import { ReactElement } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { BsChat, BsHeart } from "react-icons/bs";

import { Text } from "..";

interface PanelIconProps {
  Icon: ReactElement;
  onClick: () => void;
  stat: number;
}

const PanelIcon = ({ Icon, onClick, stat }: PanelIconProps) => (
  <Flex align="center" mr={2}>
    <IconButton
      aria-label="post-icon"
      borderRadius="full"
      colorScheme="orange"
      icon={Icon}
      onClick={onClick}
      size="sm"
      variant="ghost"
    />
    {stat && (
      <Text color="orange" fontSize="sm">
        {stat}
      </Text>
    )}
  </Flex>
);

interface Props {
  likes: number;
  comments: number;
  onLike: () => void;
  onComment: () => void;
}

const EngagementPanel = ({ likes, comments, onLike, onComment }: Props) => {
  return (
    <Flex align="center" mt={2} borderRadius="md">
      <PanelIcon Icon={<BsHeart />} onClick={onLike} stat={likes} />
      <PanelIcon Icon={<BsChat />} onClick={onComment} stat={comments} />
    </Flex>
  );
};

export default EngagementPanel;
