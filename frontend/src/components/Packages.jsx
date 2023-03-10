import React, { useState } from "react";
import "./CardBookings";
import "../assets/css/bookings.css";
import CardBookings from "./CardBookings";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const serverBase = "http://localhost:5000";
const PackageBookings = () => {
  const [packagesData, setPackageData] = useState([]);

  axios.get(`${serverBase}/packages/list`).then((response) => {
    setPackageData(response.data);
  });

  return (
    <>
      <Navbar />
      <h1 className="section-heading" style={{ marginTop: "80px" }}>
        Best Deals
      </h1>
      <div className="container mb-5">
        <div className="row mx-auto">
          {packagesData.map((data) => {
            return <CardBookings data={data} />;
          })}
        </div>
      </div>
      <Footer />


    </>
  );
};

export default PackageBookings;
