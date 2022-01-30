import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

const BeerDetails = () => {

    const [beer, setBeer] = useState({});
    const params = useParams();

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/" + params.id)
          .then((response) => {
            console.log(response.data);
            setBeer(response.data);
          })
          .catch((e) => console.log(e));
      }, [params.id]);

  return (
    <div className='content'>
        <figure>
            <img className='beer-detail-image' src={beer.image_url} alt={beer.name} />
        </figure>
        <div className="beer-detail-content">
            <div className="media-content">
                <p className="title is-4">{beer.name}</p>
                <p className="subtitle is-6">{beer.tagline}</p>
                <p><strong>First brewed: </strong>{beer.first_brewed}</p>
                <p><strong>Attenuation: </strong>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p><strong>Contributor: </strong>{beer.contributed_by}</p>
                <Link className='is-link' to="/beers">Go Back</Link>
            </div>
        </div>
    </div>
  );
};

export default BeerDetails;
