const BASE_URL = 'https://swapi.dev/api/starships'

export const getAllStarships = () => {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export const getStarship = () => {
  // TODO
}