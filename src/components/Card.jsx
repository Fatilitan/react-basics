import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";
import { Label } from "./ui/Label";

export const Card = ({ recipe }) => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "40%", lg: "20%" }}
        h={{ base: "500px", md: "450px", lg: "350px", xl: "450px" }}
        bg={"white"}
        borderRadius={"10px"}
        overflow={"hidden"}
      >
        <Image
          src={recipe.image}
          h={{ base: "220px", md: "180px", lg: "150px", xl: "180px" }}
          w={"100%"}
          objectFit={"cover"}
        />
        <Heading
          as={"h4"}
          size={"xs"}
          textTransform={"uppercase"}
          color={"grey"}
          textAlign={"center"}
          marginTop={"1em"}
        >
          {recipe.mealType[0]}
        </Heading>
        <Heading
          fontFamily={"'Open Sans', sans-serif"}
          as={"h3"}
          size={"sm"}
          color={"black"}
          fontWeight={"700"}
          textAlign={"center"}
          padding={"1em 0.75em 0 0.75em"}
          h={"55px"}
        >
          {recipe.label}
        </Heading>
        <Flex flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
          <Label item={recipe.healthLabels[0]} color={"purple.100"} />
          <Label item={recipe.healthLabels[1]} color={"purple.100"} />
        </Flex>
        <Flex flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
          {recipe.dietLabels.map((dietLabel) => (
            <Label key={dietLabel} item={dietLabel} color={"green.100"} />
          ))}
        </Flex>
        <Text textAlign={"center"}>
          Dish: <b>{recipe.dishType[0]}</b>
        </Text>
        {recipe.cautions[0] && (
          <Heading
            as={"h5"}
            size={"xs"}
            textAlign={"center"}
            marginTop={"1em"}
            fontWeight={"400"}
          >
            Cautions:
          </Heading>
        )}
        <Flex flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
          {recipe.cautions.map((cation) => (
            <Label key={cation} item={cation} color={"red.100"} />
          ))}
        </Flex>
      </Box>
    </>
  );
};
