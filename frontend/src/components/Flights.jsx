import React, { useState } from "react";
import "./CardBookings";
import "../assets/css/bookings.css";
import CardBookings from "./CardBookings";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const serverBase = "http://localhost:5000";
const FlightBookings = () => {
  const [flightsData, setFlightData] = useState([]);
  axios.get(`${serverBase}/flights/list`).then((response) => {
    setFlightData(response.data);
  });
  return (
    <>
      <Navbar />
      <h1 className="section-heading" style={{ marginTop: "80px" }}>
        Best Deals{" "}
      </h1>
      <div className="container mb-5">
        <div className="row mx-auto">
          {flightsData.map((data) => {
            return <CardBookings data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightBookings;
