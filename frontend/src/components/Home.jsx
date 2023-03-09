import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hero_caption from "../assets/img/hero_caption.png";
import flight from "../assets/img/Bookings/flight.jpg";
import hotel from "../assets/img/Bookings/hotel.jpg";
import pack from "../assets/img/Bookings/package.jpg";
import "../assets/css/home.css";
import StateCarousel from "./StateCarousel";
import DestinationCarousel from "./DestinationCarousel";
import FoodCarousel from "./FoodCarousel";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero-image">
        <div className="hero-caption-container">
          <img src={hero_caption} alt="hero-caption" className="hero-caption" />
        </div>
      </div>
      <main className="main-container ">
        <section className="top-states my-5">
          <h2 className="header">EXPLORE STATES</h2>
          <StateCarousel />
        </section>
        <section className="top-states my-5" id="top-destinations">
          <h2 className="header">TOP DESTINATIONS</h2>
          <DestinationCarousel />
        </section>
        <section className="top-states my-5">
          <h2 className="header">EXPLORE FOODS</h2>
          <FoodCarousel />
        </section>
        <section id="shorcuts">
          <h2 className="header mb-3 explore">MAKE YOUR PLANS</h2>
          <div className="card-deck">
            <div className="card">
              <a href="/book-flights" className="card-link">
                <img src={flight} className="card-img-top" alt="Flight" />
                <span>BOOK FLIGHT</span>
              </a>
            </div>
            <div className="card">
              <a href="/book-hotels" className="card-link">
                <img src={hotel} className="card-img-top" alt="Hotel" />
                <span>BOOK HOTELS</span>
              </a>
            </div>
            <div className="card">
              <a href="/book-package" className="card-link">
                <img src={pack} className="card-img-top" alt="package" />
                <span>BOOK PACKAGE</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
