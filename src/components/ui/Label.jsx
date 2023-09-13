import { Badge } from "@chakra-ui/react";

export const Label = ({ item, color }) => {
  return (
    <Badge margin={"0.5em"} backgroundColor={color}>
      {item}
    </Badge>
  );
};
