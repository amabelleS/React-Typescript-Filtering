import React from 'react'
import {RootObject as CardProps} from './SearchIngrIdients'
import {getRecipeInfo} from '../recipes-api/fetchRecipes'

import styles from './Card.module.css';


const Card = ({image, title, id, missedIngredients, likes, missedIngredientCount, }: CardProps) => {
//   console.log("🚀 ~ file: Card.tsx:8 ~ Card ~ missedIngredients", missedIngredients)

const openModal = () => {
  // findRecipeInfoById()
}

 const findRecipeInfoById = async () => {
    const results = await getRecipeInfo(id)
    console.log("🚀 ~ file: SearchIngrIdients.tsx:102 ~ findRecipes ~ results", results)
    // setRecipes(results)
  }

  return (
    <div className={styles.card}>
      {/* <div className="card__body"> */}
      <img src={image} className={styles.img} />
      <h4 className={styles.title}>{title}</h4>
        {/* <p className="card__description">{props.description}</p> */}
      {/* </div> */}
      <div className={styles.ingredients}>
        <strong><span className='ingredient-badge indigo'>{missedIngredientCount}</span> Missing Ingredients: </strong>
        <ul>
            {missedIngredients.map(i => (
                <li className='ingredient-badge red' key={i.id}><span className="w3-badge w3-red">{i.name}</span></li>
            ))}
        </ul>
      </div>
      <button onClick={findRecipeInfoById} className={styles.btn}>View Recipe</button>
    </div>
  )
}

export default Card