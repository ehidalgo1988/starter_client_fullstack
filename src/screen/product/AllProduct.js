import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SideNav from "../../components/SideNav";

import { Link, useNavigate } from "react-router-dom";

export default function AllProduct() {
  // state products

  // useeffect bring all products

  // fetch all products

  // delete product

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10 ">
          <div className="row g-4">
            {/* mapping goes here */}
            {/* <div key="" className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">title</h5>
                  <div className="d-flex justify-content-evenly">
                    <Link className="btn btn-primary" to="">
                      Update
                    </Link>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div> */}
            ;
          </div>
        </div>
      </div>
      ;
    </>
  );
}


