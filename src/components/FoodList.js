import React from 'react';
import FoodCard from './FoodCard';
import '../styles/FoodList.css';

const createFoodCards = (foods) => {
  return foods.map((food) => {
    return (
      <FoodCard
        key={ food.id }
        food={ food }/>
    )
  })
}

const FoodList = ({ foods }) => {
  return (
    <div className="food-list">
      <div className="food-row title-row">
        <p className="food-name title">Food</p>
        <p className="food-calories title">Calories</p>
      </div>
      { createFoodCards(foods) }
    </div>
  );
}


export default FoodList;
