import React from 'react'
import { Link } from "react-router-dom";
import {RootObject as CardProps} from './SearchIngrIdients'
import {getRecipeInfo} from '../recipes-api/fetchRecipes'
import { BsHeart } from 'react-icons/bs';

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
    // <div className={styles.card}>
    <figure>
      <img src={image} className={styles.img} />
      <figcaption>
      <h4 className={styles.title}>{title}</h4>
      {/* <strong>{likes}<BsHeart/></strong> */}
      {/* <span className='fa-regular fa-heart'>{likes}</span> */}
      <div className={styles.ingredients}>
        <strong><span className='ingredient-badge indigo'>{missedIngredientCount}</span> Missing Ingredients: </strong>
        <ul>
            {missedIngredients.map(i => (
                <li className='ingredient-badge red' key={i.id}><span className="w3-badge w3-red">{i.name}</span></li>
            ))}
        </ul>
      </div>
      <Link to={`${id}`} className='btn'>View Recipe</Link>
      {/* <button onClick={findRecipeInfoById} className='btn'>View Recipe</button> */}
      </figcaption>
    </figure>
    // </div> 
  )
}

export default Card