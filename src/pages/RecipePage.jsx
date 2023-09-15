import { Flex, Image, Text, Heading, Button, Box } from "@chakra-ui/react";
import { Label } from "../components/ui/Label";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Flex backgroundColor={"blue.500"}>
      <Flex
        w={{ base: "100%", md: "80&", lg: "70%" }}
        h={"100%"}
        minH={"100vh"}
        margin={"0 auto"}
        backgroundColor={"white"}
        flexWrap={"wrap"}
        alignContent={"flex-start"}
      >
        <Flex padding={"1em"}>
          <Button onClick={() => clickFn()}>Return</Button>
        </Flex>
        <Image
          src={recipe.image}
          width={"100%"}
          h={"16em"}
          objectFit={"cover"}
        />
        <Flex padding={"1em"} w={"100%"} flexWrap={"wrap"}>
          {/* Left Column */}
          <Flex
            flexWrap={"wrap"}
            w={{ base: "100%", lg: "55%" }}
            alignContent={"flex-start"}
          >
            <Heading
              as={"h4"}
              size={"sm"}
              w={"100%"}
              textTransform={"uppercase"}
              fontWeight={"400"}
            >
              {recipe.mealType}
            </Heading>
            <Heading
              as={"h1"}
              size={"md"}
              fontWeight={"500"}
              marginTop={"0.5rem"}
            >
              {recipe.label}
            </Heading>
            <Text marginTop={"2em"} width={"100%"}>
              Total cooking time: <b>{recipe.totalTime} Minutes</b>
            </Text>
            <Text marginTop={"0.5em"} width={"100%"}>
              Servings: <b>{recipe.yield}</b>
            </Text>
            <Heading
              as={"h4"}
              fontWeight={"500"}
              size={"md"}
              marginTop={"1.5em"}
              marginBottom={"1em"}
            >
              Ingredients:
            </Heading>
            {recipe.ingredientLines.map((ingredients) => (
              <Text key={ingredients} marginTop={"0.5em"} width={"100%"}>
                {ingredients}
              </Text>
            ))}
          </Flex>
          {/* Right Column */}
          <Flex
            w={{ base: "100%", lg: "45%" }}
            flexWrap={"wrap"}
            alignContent={"flex-start"}
            marginTop={{ base: "1.5em", lg: "0" }}
          >
            <Heading as={"h4"} size={"sm"} w={"100%"} fontWeight={"400"}>
              Health labels:
            </Heading>
            {recipe.healthLabels.map((healthLabel) => (
              <Label
                key={healthLabel}
                item={healthLabel}
                color={"purple.100"}
              />
            ))}
            {recipe.dietLabels[0] && (
              <Heading
                as={"h4"}
                size={"sm"}
                w={"100%"}
                fontWeight={"400"}
                marginTop={"1em"}
              >
                Diet:
              </Heading>
            )}
            {recipe.dietLabels.map((dietLabel) => (
              <Label key={dietLabel} item={dietLabel} color={"green.100"} />
            ))}
            {recipe.cautions[0] && (
              <Heading
                as={"h4"}
                size={"sm"}
                w={"100%"}
                fontWeight={"400"}
                marginTop={"1em"}
              >
                Cautions:
              </Heading>
            )}
            {recipe.cautions.map((cation) => (
              <Label key={cation} item={cation} color={"red.100"} />
            ))}
            <Heading
              as={"h4"}
              size={"md"}
              w={"100%"}
              fontWeight={"400"}
              marginTop={"1em"}
            >
              Total nutrients:
            </Heading>
            <Flex flexWrap={"wrap"}>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(
                    parseInt(recipe.totalNutrients.ENERC_KCAL.quantity)
                  )}
                  <span>{recipe.totalNutrients.ENERC_KCAL.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  CALORIES
                </Heading>
              </Box>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                  <span>{recipe.totalNutrients.CHOCDF.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  CARBS
                </Heading>
              </Box>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                  <span>{recipe.totalNutrients.PROCNT.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  PROTEIN
                </Heading>
              </Box>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(recipe.totalNutrients.FAT.quantity)}
                  <span>{recipe.totalNutrients.FAT.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  FATS
                </Heading>
              </Box>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                  <span>{recipe.totalNutrients.CHOLE.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  CHOLESTEROL
                </Heading>
              </Box>
              <Box margin={"1em 1.5em 0 0"}>
                <Text>
                  {Math.round(recipe.totalNutrients.NA.quantity)}
                  <span>{recipe.totalNutrients.NA.unit}</span>
                </Text>
                <Heading as={"h5"} size={"xs"}>
                  SODIUM
                </Heading>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
