import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function SingleUser() {
// usestate name, email, avatar


// useEffect fetchingSingleUser


// fetchSingleUser
 

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <img src='' className="card-img-top" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: </h5>
                <p className="card-text">email:  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
