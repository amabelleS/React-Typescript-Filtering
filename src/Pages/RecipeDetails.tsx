import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {getRecipeInfo, RecipeInfo} from '../recipes-api/fetchRecipes'


export type MyParams = {
  recipeId: string;
};

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState<RecipeInfo>({} as RecipeInfo)
    let { recipeId } = useParams<MyParams>();

    const findRecipeInfoById = async () => {
        if (recipeId !== undefined) {
            const result = await getRecipeInfo(+recipeId)
            console.log("🚀 ~ file: SearchIngrIdients.tsx:102 ~ findRecipes ~ results", result)
            setRecipe(result)
        }
  }

  useEffect(() => {
    findRecipeInfoById()
  }, [])

  return (
    <div>{recipe?.title}</div>
  )
}

export default RecipeDetails