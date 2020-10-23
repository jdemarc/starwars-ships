import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import * as shipAPI from './services/sw-api';

import Header from './components/Header/';
import StarshipPage from './pages/StarshipPage';

import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);

  // Cannot use promise or async with useEffect. Rather, use a function instead called within useEffect.
  useEffect(() => {
    const fetchShips = async () => {
      const fetchedData = await shipAPI.getAllStarships();

      setStarships(fetchedData.results);
    }

    fetchShips();
  }, [])

  const getStarship = (idx) => {
    return starships[idx];
  }


  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          { starships 
          ?
            <section>
              {starships.map((ship, idx) =>
                <Link 
                to={`/starships/${idx}`}
                key={idx}
                >
                  {ship.name}
                </Link>
              )}
            </section>
          :
          <h3> Loading ... </h3>
          }
        </Route>

        <Route path='/starships/:idx' render={() =>
          <StarshipPage
            starships={starships}
            getStarship={getStarship}
          />
        }/>
      </Switch>
    </div>
  );
}

export default App;
