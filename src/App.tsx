import SearchIngrIdients from "./components/SearchIngrIdients"

interface RootObject {
  results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

interface Result {
  id: number;
  name: string;
  image: string;
}

function App() {
  
  return (
    <SearchIngrIdients/>
  )
}

export default App