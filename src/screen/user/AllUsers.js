import axios from "axios";
import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AllUsers() {
  // state users

  // useffect

  // fetch all users

  // handle delete

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10 ">
          <div className="row g-4">{/* display goes here */}</div>
        </div>
      </div>
      ;
    </>
  );
}

//  <div key='' className="col-md-3">
//    <div className="card" style={{ width: "18rem" }}>
//      <img src='' className="card-img-top" alt="..." />
//      <div className="card-body">
//        <h5 className="card-title">name</h5>
//        <p className="card-text">email</p>
//        <div className="d-flex justify-content-evenly">
//          <Link className="btn btn-primary" to={`/user/update/${user._id}`}>
//            Update
//          </Link>
//          <button
//            className="btn btn-danger"
//          >
//            Delete
//          </button>
//        </div>
//      </div>
//    </div>
//  </div>;
