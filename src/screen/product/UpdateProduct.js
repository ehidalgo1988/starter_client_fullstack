import axios from "axios";
import SideNav from "../../components/SideNav";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  // state title, description, price, image, category, quantity

  // useeffect bring singel product

  // function to fetch single product from server

  // submit updates to server

  return (
    <div>
      {/* {JSON.stringify(state, null, 4)} */}
      <div className="row ">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <h2>Create Product</h2>
          <form>
            <div className="form-froup">
              <label>Title</label>
              <input name="title" className="form-control" type="text" />
            </div>
            <div className="form-froup">
              <label>Description</label>
              <input name="description" className="form-control" type="text" />
            </div>
            <div className="form-froup">
              <label>Price</label>
              <input name="price" className="form-control" type="text" />
            </div>
            <div className="form-froup">
              <label>Category</label>
              <input name="category" className="form-control" type="text" />
            </div>
            <div className="form-froup">
              <label>Image</label>
              <input name="image" className="form-control" type="text" />
            </div>
            <div className="form-froup">
              <label>Quantity</label>
              <input name="quantity" className="form-control" type="text" />
            </div>
            <button className="btn btn-primary mt-3">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
