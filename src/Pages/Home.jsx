import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

const Home = () => {
  return (
      <>
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <img src={beers} alt="All Beers" />
            </figure>
            <div className="card-content">
                <div className="media-content">
                <Link className="title is-link" to="/beers">All Beers</Link>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est quae accusantium libero quaerat mollitia ipsam tenetur nulla vel non laboriosam, alias eius voluptatum sit iusto nihil possimus porro ab.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-image">
            <figure className="image">
                <img src={randomBeer} alt="Random Beer" />
            </figure>
            <div className="card-content">
                <div className="media-content">
                <Link className="title is-link" to="/random-beer">Random Beer</Link>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est quae accusantium libero quaerat mollitia ipsam tenetur nulla vel non laboriosam, alias eius voluptatum sit iusto nihil possimus porro ab.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-image">
            <figure className="image">
                <img src={newBeer} alt="New Beer" />
            </figure>
            <div className="card-content">
                <div className="media-content">
                <Link className="title is-link" to="/new-beer">New Beer</Link>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est quae accusantium libero quaerat mollitia ipsam tenetur nulla vel non laboriosam, alias eius voluptatum sit iusto nihil possimus porro ab.</p>
                </div>
            </div>
        </div>
    </div>
</>
  );
};

export default Home;
