import React, { useState, useEffect} from 'react'
// import { useFetch } from "../useFetch"
import { getRecipes } from "../recipes-api/fetchRecipes"
import Card from "./Card"
import mockData from './data.json'
import ingredientsList from './ingredients.json'
import styles from './SearchIngrIdients.module.css'

export interface RootObject {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: MissedIngredient[];
  title: string;
  unusedIngredients: any[];
  usedIngredientCount: number;
  usedIngredients: MissedIngredient[];
}

interface MissedIngredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: any[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}

interface dataIngredient {
    title: string | number;
    id: string | number
}

const SearchIngrIdients = () => {
    // const baseUrl = import.meta.env.VITE_SPOONACULAR_URL
  const baseUrl = import.meta.env.VITE_SPOONACULAR_URL_MOCK

  const dataList = [...new Set(ingredientsList?.map(i => {
      return i[0];
  }))]
  
  const [recipes, setRecipes] = useState<RootObject[]>([])
  const [ingredients, setIngredients] = useState<(string | number)[]>(dataList) //? type
  const [ingredient, setIngredient] = useState<string | null>('');
  const [selectedIngredients, setSelectedIngredients] = useState<(string | undefined)[]>([]);
  
  // const { response, error, isLoading } = useFetch(`${baseUrl}/recipes/findByIngredients?ingredients=banana,flower&number=2&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`)

  useEffect(() => {
    async function getData () {
      const results = await getRecipes(selectedIngredients)
      console.log("🚀 ~ file: SearchIngrIdients.tsx:102 ~ findRecipes ~ results", results)
      setRecipes(results)
    }

    getData()
  }, [])

  const addIngredient = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    if (!ingredient) return;
    setSelectedIngredients(prev => [...prev, ingredient])
    setIngredient(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(event?.target.value)
  };

  const clear = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.target.value = "";
    setIngredient('')
  };

  const findRecipes = async () => {
    const results = await getRecipes(selectedIngredients)
    console.log("🚀 ~ file: SearchIngrIdients.tsx:102 ~ findRecipes ~ results", results)
    setRecipes(results)
  }

  const handelDeleteIng = (i: string) => {
    setSelectedIngredients(selectedIngredients.filter((ing) => ing !== i));
  };

  // if (error) return <p>There is an error.</p>
  // if (isLoading) return <p>Loading...</p>
  return (
    <div className={styles.wrapper}>
      <h1>Search Recipes By What Ingredients You Have</h1>
      <form onSubmit={event => addIngredient(event)}>
        {/* <label></label> */}
        <div className={styles.buttonIn}>
          <input
            // className={styles.input}
            type="input "
            list="ingredients"
            placeholder="Choose an ingredient"
            aria-label="Choose ingredients that you have"
            onChange={handleChange}
            onFocus={clear}
          />
          <button type="submit" className={styles.submitBtn}>
          Add an ingredient
          </button>
          <datalist id="ingredients">
            {ingredients.map((ingredient) => (
              <option key={ingredient} value={ingredient}></option>
            ))}
          </datalist>
        </div>
      </form>
      <div className={styles.choosen}>
        {/* <h4>Ingredients:</h4> */}
        <ul>
        {selectedIngredients.map(i => (
            <li 
              title={`Double click to delete ${i}`} 
              key={i} 
              className='ingredient-badge large green' 
              onDoubleClick={() => handelDeleteIng(i as string)}>
                {i}
            </li>
        ))}
        </ul>
      </div>
      <button className={`btn ${styles.findBtn}`} type="button" onClick={findRecipes}>
          Find Recipes
        </button>
      <div>
        {/* <h3>Recipes</h3> */}
        <ul className={styles.list} >
        {recipes && recipes.length > 0 && recipes?.map(recipe => (
            <Card key={recipe.id} {...recipe} />
        ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchIngrIdients