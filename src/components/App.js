import React, { Component } from 'react';
import '../styles/App.css';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import { getFoods } from '../utils/requests';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: []
    }
  }

  updateFoods = (name, calories) => {
    this.setState({ foods: [...this.state.foods, { name, calories }] })
  }

  componentDidMount() {
    getFoods()
    .then((foods) => this.setState({ foods: foods }))
    .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className="app">
        <h1 className="my-foods-header">Manage Foods</h1>
        <FoodList foods={ this.state.foods } />
        <FoodForm updateFoods={ this.updateFoods } />
      </div>
    );
  }
}

export default App;
