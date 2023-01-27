import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchIngrIdients from "./components/SearchIngrIdients"
import RecipeDetails from "./Pages/RecipeDetails"
import './App.scss'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchIngrIdients />} />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App