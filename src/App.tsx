import { useState, useEffect } from "react"
import { useFetch } from "./useFetch"

function App() {
  const [recipes, setRecipes] = useState([])

  const url = import.meta.env.VITE_SPOONACULAR_URL;
   const { response, error, isLoading } = useFetch(url);
   console.log("🚀 ~ file: App.tsx:12 ~ App ~ response", response)
  //  const { response, error, isLoading } = useFetch<Post[]>(url)
 
  const getData = async () => {
  const res = await fetch(import.meta.env.VITE_SPOONACULAR_URL)
  const data = await res.json()
  console.log("🚀 ~ file: App.tsx:11 ~ deta", data)
  setRecipes(data)
  return data
 }

  useEffect(() => {
    // getData()
  }, [])

  useEffect(() => {
    console.log("🚀 ~ file: App.tsx:22 ~ deta", recipes)
  }, [recipes])

  if (error) return <p>There is an error.</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <h1>hi</h1>
  )
}

export default App