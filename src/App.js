import React, { useEffect, useState } from 'react';
import * as shipAPI from './services/sw-api';

import Header from './components/Header/'

const App = () => {
  const [starships, setStarships] = useState([]);

  // Cannot use promise or async with useEffect. Rather, use a function instead called within useEffect.
  useEffect(() => {
    const fetchShips = async () => {
      const fetchedData = await shipAPI.getAllStarships();

      setStarships(fetchedData);
    }

    fetchShips();
  }, [])


  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
