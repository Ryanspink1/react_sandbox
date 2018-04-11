import React from 'react';
import '../styles/FoodList.css';

class FoodList extends Component {
  let foods = this.props.foods;
  let mappedFoods = foods.map((food) => {
    return(
      <div className="food-row">
        <p className="food-name">{ food.name }</p>
        <p className="food-calories">{ food.caloris }</p>
      </div>
    )
  })
  render() {
    return (
      <div className="food-list">
        <div className="food-row title-row">
          <p className="food-name title">Food</p>
          <p className="food-calories title">Calories</p>
        </div>
        { mappedFoods }
      </div>
    )
  }
}

export default FoodList;
