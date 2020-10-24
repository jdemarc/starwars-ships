const BASE_URL = 'https://swapi.dev/'

export const getAllStarships = () => {
  return fetch(BASE_URL + 'api/starships')
  .then(res => res.json());
}

// export const getStarship = (idx) => {
//   return fetch(`${BASE_URL}api/starships/${idx}`)
//   .then(res => res.json());
// }