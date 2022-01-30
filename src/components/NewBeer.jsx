import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributor] = useState("");

  const navigate = useNavigate();

  const createNewBeer = (e) => {
    console.log("Crafting new beer...");
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log(response);
        navigate("/beers");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={createNewBeer}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="tagline"
              placeholder="Tagline"
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">First brewed</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="first_brewed"
              placeholder="Date XX/XXXX"
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Brewers tips</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="brewers_tips"
              placeholder="Tips"
              onChange={(e) => setBrewersTips(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Attenuation level</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="attenuation_level"
              placeholder="0 to 100"
              onChange={(e) => setAttenuationLevel(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">contributor</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="contributed_by"
              placeholder="Name & handle"
              onChange={(e) => setContributor(e.target.value)}
            />
          </div>
        </div>
        <button className="button is-info">Add New Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
