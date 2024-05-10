import { Text, TextProps } from "@chakra-ui/react";

import { fontFamily } from "../utils/data";

const AppText = ({ children, ...otherProps }: TextProps) => (
  <Text {...otherProps} letterSpacing=".5px" fontFamily={fontFamily}>
    {children}
  </Text>
);

export default AppText;
