import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import * as shipAPI from './services/sw-api';

import Header from './components/Header/';

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


  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
