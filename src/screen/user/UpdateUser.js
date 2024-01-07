import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function UpdateUser() {
  // state, name, emai, password, avatar

  // navigate and paramars

  // useEffect

  // fetch single user

  // handleSumit
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-8 ">
          <h3 className="h3 text-center">Update User</h3>
          <form >
            <input
              type="text"
              className="form-control mb-4 p-2 "
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="form-control mb-4 p-2 "
              placeholder="Enter your email"
            />
            <input
              type="password"
              className="form-control mb-4 p-2 "
              placeholder="Enter your password"
            />
            <input
              type="text"
              className="form-control mb-4 p-2 "
              placeholder="Link your avatar image"
            />
            <button className="btn btn-primary " type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
