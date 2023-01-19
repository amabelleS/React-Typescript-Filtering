import React, { useState, useEffect} from 'react'
import { useFetch } from "../useFetch"
import Card from "./Card"
import mockData from './data.json'
import ingredientsList from './ingredients.json'

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

const SearchIngrIdients = () => {
    const baseUrl = import.meta.env.VITE_SPOONACULAR_URL_SEARCHH
  let url = `${baseUrl}apples,flour,sugar&number=2&${import.meta.env.VITE_SPOONACULAR_API_KEY}`
//   const { response, error, isLoading } = useFetch(url);

// const in = ingredients?.map(i => {
//     return i[0]
// })
const ingredientsArr = ingredientsList.map(i => i[0])
console.log("🚀 ~ file: SearchIngrIdients.tsx:35 ~ ingredientsArr", ingredientsArr)

// console.log("🚀 ~ file: SearchIngrIdients.tsx:40 ~ SearchIngrIdients ~ ingredients", ingredients)
  const [recipes, setRecipes] = useState<RootObject[]>(mockData)
  const [ingredients, setIngredients] = useState<(string | number)[]>(ingredientsArr) //? type
  const [ingredient, setIngredient] = useState<string>('');
  const [selectedIngredients, setSelectedIngredients] = useState<(string | number)[]>([]);
  console.log("🚀 ~ file: SearchIngrIdients.tsx:40 ~ SearchIngrIdients ~ mockData", mockData)

  //  const { response, error, isLoading } = useFetch<Post[]>(url)
 
  const getRecipes = async (): Promise<RootObject[]> => {
  const res = await fetch(url)
  const results = await res.json()
  console.log("🚀 ~ file: App.tsx:11 ~ deta", results)
  setRecipes(results)
  return results
 }

  useEffect(() => {
    // getData()
    // setRecipes(response)
  }, [])

  useEffect(() => {
    console.log("🚀 ~ file: App.tsx:22 ~ deta", recipes)
  }, [recipes])

//   const handleChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
//     if ((!event.nativeEvent).inputType) {
//       setIngredient(event.target.value);
//       event.target.blur();
//     }
//   };

  const clear = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.target.value = "";
  };

//   if (error) return <p>There is an error.</p>
//   if (isLoading) return <p>Loading...</p>
  return (
    <div>
        <form className="form">
        {/* <label>Choose a city</label> */}
        <div className="filter-center">
          <input
            className="datalist"
            type="text"
            list="cities"
            placeholder="Choose a city"
            aria-label="Filter graduates by center name"
            onChange={event => setIngredient(event.target.value)}
            // onChange={(event) => handleChange(event)}
            // onFocus={event => clear(event)}
          />
          <datalist id="cities">
            {ingredientsList.map((ingredient) => (
              <option key={ingredient[1]} value={ingredient[0]} />
            ))}
          </datalist>
        </div>
        {/* <button type="submit" className="submit-btn" onClick={}>
          Add a city
        </button> */}
      </form>
        {recipes?.map(recipe => (
            <Card image={recipe.image} title={recipe.title}/>
        ))}
    </div>
  )
}

export default SearchIngrIdients