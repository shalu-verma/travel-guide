import React from "react";
import "../assets/css/state.css";
import NavBar from "./Navbar";
import Footer from "./Footer";
import CardTopPlaces from "./CardTopPlaces";
import CardTopFoods from "./CardTopFoods";

import states from "../assets/data/states.js";

function PageState(props) {
  let state = props.match.params.state;
  let data = states[state];
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.bg})`,
  };
  return (
    <>
      <NavBar />
      <div className="banner" style={bgStyle}>
        <h1>{state}</h1>
        <p className="mb-0">{data.tagLine}</p>
      </div>
      <h2 className="mt-5 header">Top places to explore</h2>
      <div className="container">
        <div className="row mt-2 mx-auto">
          {data.topPlaces.map((place) => {
            return <CardTopPlaces key={Math.random()} place={place} />;
          })}
        </div>
        <h2 className="mt-5 header">Must try Foods</h2>
        <div className="row mt-2 mb-4 mx-auto">
          {data.topFoods.map((food) => {
            return <CardTopFoods key={Math.random()} food={food} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageState;
