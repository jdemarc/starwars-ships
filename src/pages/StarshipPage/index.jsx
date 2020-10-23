import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Starship.css';

const StarshipPage = ( { starships, getStarship } ) => {
  let { idx } = useParams();

  const [starship, setStarship] = useState({})

  // TO DO

  return (
    <div className='ship-container'>
      <div className='starship'>
        {starship.name}
      </div>
    </div>
  )
}

export default StarshipPage;