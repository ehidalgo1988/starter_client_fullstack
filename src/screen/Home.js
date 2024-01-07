import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <h1 className="text-center">Our Users</h1>
          <div className="row ">{/* card  goes here */}</div>
          <hr />

          <h2 className="text-center">Our Product </h2>

          <div className="row mb-2">{/* card  goes here */}</div>
        </div>
      </div>
    </>
  );
}

//  <div className="card" style={{ width: "18rem" }}>
//    <img src={} className="card-img-top" alt="..." />
//    <div className="card-body">
//      <h5 className="card-title">{}</h5>  //
//    </div>
//  </div>;
