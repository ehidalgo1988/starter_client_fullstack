import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function CreateUser() {
  // state name, email, password, avatar

  // handle submit

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-8">
          <h3 className="h3 text-center">Create User</h3>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
