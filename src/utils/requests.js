const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getFoods = () => {
  return fetch(`http://turing-quantified-self-api.herokuapp.com/api/v1/foods`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const postHeaders = (foodName, foodCalories) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ food: { name: foodName, calories: foodCalories }})
  }
}
const addFoods = (foodName, foodCalories) => {
  return fetch(`http://turing-quantified-self-api.herokuapp.com/api/v1/foods`, postHeaders(foodName, foodCalories))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

module.exports = {
  getFoods,
  addFoods,
};
