import axios from "axios";
import SideNav from "../../components/SideNav";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  // state title, description, price, image, category, quantity

  // handle submit

  // option handle change

  return (
    <div>
      <div className="row ">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <h2>Create Product</h2>
          <form >
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
            <button className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
