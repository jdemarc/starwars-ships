import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Starship.css';

const StarshipPage = ( { getStarship } ) => {
  let { idx } = useParams();

  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const ship = getStarship(idx);
    setStarship(ship);
  }, [getStarship, idx])

  return (
    <div className='ship-container'>
      { starship ? 
      <div className='starship'>
        <span>NAME: { starship.name }</span>
        <span>MODEL: { starship.model }</span>
        <Link to='/'>RETURN</Link>
      </div>
      :
      <h3> Loading ... </h3> 
    }
    </div>
  )
}

export default StarshipPage;