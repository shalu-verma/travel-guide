import React from "react";
import "./Card_Bookings";
import "../assets/css/bookings.css";
import Card_Bookings from "./Card_Bookings";
import Navbar from "./Navbar";
import Footer from "./Footer";
import flights from "../assets/data/flight";

const FlightBookings = () => {
  return (
    <>
      <Navbar />
      <h1 className="section-heading" style={{ marginTop: "80px" }}>
        Best Deals{" "}
      </h1>
      <div className="container mb-5">
        <div className="row mx-auto">
          {flights.map((data) => {
            return <Card_Bookings data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightBookings;
