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

export interface RecipeInfo {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: any[];
  occasions: any[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: any[];
  originalId?: any;
  spoonacularSourceUrl: string;
}

interface WinePairing {
  pairedWines: any[];
  pairingText: string;
  productMatches: any[];
}

interface Nutrition {
  nutrients: Nutrient[];
  properties: Property[];
  flavonoids: Property[];
  ingredients: Ingredient[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

interface WeightPerServing {
  amount: number;
  unit: string;
}

interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: Nutrient[];
}

interface Property {
  name: string;
  amount: number;
  unit: string;
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

interface Measures {
  us: Us;
  metric: Us;
}

interface Us {
  amount: number;
  unitShort: string;
  unitLong: string;
}

const baseUrl = import.meta.env.VITE_SPOONACULAR_URL_MOCK

export const getRecipes = async (selectedIngredients: (string | undefined)[]): Promise<RootObject[]> => {
    const strSelected = selectedIngredients.join()
    const url = `${baseUrl}/recipes/findByIngredients?ingredients=${strSelected}&number=20&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
    const res = await fetch(url)
    const results = await res.json()
    console.log("🚀 ~ file: App.tsx:11 ~ results", results)
    return results
 }

export const getRecipeInfo = async (id: number, info?: string): Promise<RecipeInfo[]> => {
    // const strSelected = selectedIngredients.join()
    const url = `${baseUrl}/recipes/${id}/information?includeNutrition=true&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
    const res = await fetch(url)
    const results = await res.json()
    console.log("🚀 ~ file: App.tsx:11 ~ results", results)
    return results
 }