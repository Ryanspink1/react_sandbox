import React, { Component } from 'react';
import '../styles/App.css';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import { getFoods } from '../utils/requests';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    getFoods()
    .then((foods) => this.setState({ foods: foods }))
    .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className="app">
        <FoodList foods={ this.state.food }/>
        <Food Form />
      </div>
    );
  }
}

export default App;
