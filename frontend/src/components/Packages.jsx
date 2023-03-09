import React from "react";
import "../assets/css/bookings.css";
import CardBookings from "./CardBookings";
import Navbar from "./Navbar";
import Footer from "./Footer";
import packages from "../assets/data/packages";

const PackageBookings = () => {
  return (
    <>
      <Navbar />
      <h1 className="section-heading" style={{ marginTop: "80px" }}>
        Best Deals{" "}
      </h1>
      <div className="container mb-5">
        <div className="row mx-auto">
          {packages.map((data) => {
            return <CardBookings data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PackageBookings;
