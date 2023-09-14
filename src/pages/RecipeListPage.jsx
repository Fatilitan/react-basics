import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Card } from "../components/Card";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = () => {
  const recipes = data.hits;

  return (
    <>
      <Center
        h="100%"
        flexDir={{ base: "column", sm: "row" }}
        padding={"2em"}
        flexWrap={"wrap"}
        bg={"blue.500"}
        gap={6}
      >
        <Heading w={"100%"} as={"h1"} color={"white"} textAlign={"center"}>
          Winc recipe checker
        </Heading>
        <Center w={"100%"}>
          <TextInput />
        </Center>
        {recipes.map((recipe) => (
          <Card key={recipe.recipe.calories} recipe={recipe.recipe} />
        ))}
      </Center>
    </>
  );
};
