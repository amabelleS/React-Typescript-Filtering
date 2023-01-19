import React from 'react'

import styles from './Card.module.css';

import {RootObject as CardProps} from './SearchIngrIdients'
interface Props {
    image: string,
    title: string
}

const Card = ({image, title}: Props) => {
  return (
    <div className={styles.container}>
        <h3>{title}</h3>
        <img src={image}/>
    </div>
  )
}

export default Card