import { useState } from "react";
import { Link, TextProps } from "@chakra-ui/react";

import { Text } from "..";

interface Props extends TextProps {
  charLimit?: number;
}

const ReadMoreText = ({ children, charLimit = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = children as string;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <Text color="gray.500" mb={2} fontSize={12}>
      {isExpanded ? text : `${text.substring(0, charLimit)}...`}
      {text.length > charLimit && (
        <Link onClick={toggleReadMore} color="blue.500" ml={1} cursor="pointer">
          {isExpanded ? "Read less" : "Read more"}
        </Link>
      )}
    </Text>
  );
};

export default ReadMoreText;
