import { Center, Flex, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Card } from "../components/Card";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const allRecipes = data.hits;

  const [searchField, setSearchField] = useState("");

  let matchedRecipes = [];

  for (let recipe of allRecipes) {
    const recipes = recipe.recipe;
    if (recipes.label.toLowerCase().includes(searchField.toLowerCase())) {
      matchedRecipes.push(recipes);
    }
  }

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Flex
        minHeight={"100vh"}
        h="100%"
        flexDir={{ base: "column", sm: "row" }}
        padding={{ base: "2em 0 0 0", md: "2em" }}
        flexWrap={"wrap"}
        bg={"blue.500"}
        justifyContent={"center"}
      >
        <Center flexWrap={"wrap"} h={"7em"}>
          <Heading w={"100%"} as={"h1"} color={"white"} textAlign={"center"}>
            Winc recipe checker
          </Heading>
          <Center w={"100%"}>
            <TextInput onChange={handleChange} />
          </Center>
        </Center>
        <Center
          flexDir={"row"}
          padding={"2em"}
          flexWrap={"wrap"}
          bg={"blue.500"}
          gap={6}
          width={"100%"}
          height={"100%"}
        >
          {matchedRecipes.map((recipe) => (
            <Card key={recipe.calories} recipe={recipe} clickFn={clickFn} />
          ))}
        </Center>
      </Flex>
    </>
  );
};
