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
        boxShadow={"rgba(0, 0, 0, 0.4) 2px 3px 12px"}
        transition={"300ms"}
        _hover={{
          boxShadow: "rgba(0, 0, 0, 0.6) 2px 3px 20px",
          transform: "translateY(5px)",
        }}
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
          fontSize={{ base: "0.8em", lg: "0.75em", xl: "0.8em" }}
          textTransform={"uppercase"}
          color={"grey"}
          textAlign={"center"}
          marginTop={{ base: "1em", lg: "0.5em", xl: "1em" }}
        >
          {recipe.mealType[0]}
        </Heading>
        <Heading
          fontFamily={"'Open Sans', sans-serif"}
          as={"h3"}
          size={"sm"}
          fontSize={{ base: "1em", lg: "0.9em", xl: "1em" }}
          color={"black"}
          fontWeight={"700"}
          textAlign={"center"}
          padding={{
            base: "1em 0.75em 0 0.75em",
            lg: "0.5em 0.75em 0 0.75em",
            xl: "1em 0.75em 0 0.75em",
          }}
          h={{ base: "55px", lg: "40px", xl: "55px" }}
        >
          {recipe.label}
        </Heading>
        <Flex
          flexWrap={"wrap"}
          h={{ base: "180px", lg: "140px", xl: "175px" }}
          alignContent={"center"}
        >
          <Flex
            flexDir={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            w={"100%"}
          >
            <Label item={recipe.healthLabels[0]} color={"purple.100"} />
            <Label item={recipe.healthLabels[1]} color={"purple.100"} />
          </Flex>
          <Flex
            flexDir={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            w={"100%"}
          >
            {recipe.dietLabels.map((dietLabel) => (
              <Label key={dietLabel} item={dietLabel} color={"green.100"} />
            ))}
          </Flex>
          <Text
            textAlign={"center"}
            w={"100%"}
            fontSize={{ base: "0.9em", lg: "0.8em", xl: "0.9em" }}
          >
            Dish: <b>{recipe.dishType[0]}</b>
          </Text>
          {recipe.cautions[0] && (
            <Heading
              as={"h5"}
              size={"xs"}
              textAlign={"center"}
              marginTop={"1em"}
              fontWeight={"400"}
              w={"100%"}
            >
              Cautions:
            </Heading>
          )}
          <Flex
            flexDir={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            w={"100%"}
          >
            {recipe.cautions.map((cation) => (
              <Label key={cation} item={cation} color={"red.100"} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
