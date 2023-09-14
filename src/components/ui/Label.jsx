import { Badge } from "@chakra-ui/react";

export const Label = ({ item, color }) => {
  return (
    <Badge
      margin={"0.5em"}
      backgroundColor={color}
      fontSize={{ base: "0.75em", lg: "0.5em", xl: "0.75em" }}
    >
      {item}
    </Badge>
  );
};
