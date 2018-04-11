import React, { Component } from 'react';
import '../styles/FoodForm.css';
import { addFoods } from '../utils/requests';

class FoodForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: '',
      calories: '',
    }
  }

  updateFoodInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addFood = (event) => {
    event.preventDefault();
    const food = this.state.food;
    const calories = this.state.calories;

    addFoods(food, calories)
      .then(() => this.props.updateFoods(food, calories))
      .catch(error => console.error({ error }))
  }

  render() {
    return (
      <div className="food-form">
        <h2 className="add-food-header">Add A Food</h2>
        <form className="add-food-form">
          <input
            className="input"
            type="text"
            placeholder="Food name"
            value={ this.state.food }
            onChange={ this.updateFoodInfo.bind(this, 'food') }
          />
          <input
            className="input"
            type="number"
            placeholder="Calories"
            value={ this.state.calories }
            onChange={ this.updateFoodInfo.bind(this, 'calories') }
          />
          <button
            className="add-food-btn"
            onClick={ this.addFood }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
