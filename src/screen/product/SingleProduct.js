import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  // state title, description, price, image, category, quantity



// useEffect to bring single product

// function for fetching single product


  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
          <img src='' className="card-img-top" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">title here</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Description:
              </li>
              <li className="list-group-item">Price: $ </li>
              <li className="list-group-item">Category: </li>
              <li className="list-group-item">Quantity: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
