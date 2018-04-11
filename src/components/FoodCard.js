import React from 'react';
import '../styles/FoodCard.css';

const FoodCard = ({ food, deleteFood}) => {
  return (
    <div
      className="food-row"
      key={ food.id }
    >
      <p className="food-name">{ food.name }</p>
      <p className="food-calories">{ food.caloris }</p>
    </div>
  )
}

export default FoodCard;
