import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const RandomBeer = () => {

  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Navbar />
      <div className='content'>
        <figure>
            <img className='beer-detail-image' src={randomBeer.image_url} alt={randomBeer.name} />
        </figure>
        <div className="beer-detail-content">
            <div className="media-content">
                <p className="title is-4">{randomBeer.name}</p>
                <p className="subtitle is-6">{randomBeer.tagline}</p>
                <p><strong>First brewed: </strong>{randomBeer.first_brewed}</p>
                <p><strong>Attenuation: </strong>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p><strong>Contributor: </strong>{randomBeer.contributed_by}</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default RandomBeer;
