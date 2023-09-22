import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addUser } from "./api.js";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const value = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  ip: "",
  latitude: "",
  longitude: "",
  created_at: "",
  updated_at: "",
};

function Adduser() {
  const [user, setUser] = useState({ value });

  const updateCreatedAt = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(
        2,
        "0"
      )} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    setUser((user) => {
      return { ...user, created_at: formattedDate };
    });
  };

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    if (!user.created_at) {
      updateCreatedAt();
    }
    console.log(user);
  };

  const adduserdetails = async () => {
    await addUser(user);
    Swal.fire({
      title: "Success",
      text: "Customer has been added",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="bg-light p-3">
      <h2 className="text-center">Add Customer Details</h2>
      <div className="container border mt-4 p-4">
        <form>
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="id"
              placeholder="Enter your ID"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Enter your first name"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Enter your last name"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">IP Address</label>
            <input
              type="text"
              className="form-control"
              name="ip"
              placeholder="Enter your IP address"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              type="text"
              className="form-control"
              name="latitude"
              placeholder="Enter your latitude"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Longitude</label>
            <input
              type="text"
              className="form-control"
              name="longitude"
              placeholder="Enter your longitude"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => adduserdetails(user)}
            >
              Submit
            </button>
            <NavLink to="/" type="button" className="btn btn-primary m-3 p-2">
              Go Back
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Adduser;
