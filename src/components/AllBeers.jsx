import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from 'react-router-dom';

const AllBeers = (props) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="">
      <Navbar />
      <p className="title ml-3">All Beers</p>
      {beers.map(beer => {
        return (
          <div className="box" key={beer._id}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-24x24">
                  <img src={beer.image_url} alt={beer.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p><strong>{beer.name}</strong></p>
                  <p className="has-text-grey">{beer.tagline}</p>
                  <p><small>{beer.contributed_by}</small></p>
                  <Link to={`/beers/${beer._id}`}>More info...</Link>
                </div>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  );
};

export default AllBeers;
