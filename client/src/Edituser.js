import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "./api.js";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const value = {
  email: "",
  first_name: "",
  last_name: "",
  ip: "",
  latitude: "",
  longitude: "",
  created_at: "",
  updated_at: "",
};

function Edituser() {
  const [user, setUser] = useState(value);
  const {
    email,
    first_name,
    last_name,
    ip,
    latitude,
    longitude,
    created_at,
  } = user;
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
  };
  const updateAt = () => {
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
      return { ...user, updated_at: formattedDate };
    });
  };

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    if (!user.updated_at) {
      updateAt();
    }
    console.log(user);
  };

  const edituserdetails = async () => {
    const response = await editUser(id, user);
    navigate("/all");
    Swal.fire({
      title: "Success",
      text: "Data has been updated!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container mt-5 mb-5 p-4 bg-light">
      <h2>Edit Details</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={first_name}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={last_name}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">IP Address</label>
          <input
            type="text"
            className="form-control"
            name="ip"
            value={ip}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Latitude</label>
          <input
            type="text"
            className="form-control"
            name="latitude"
            value={latitude}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude</label>
          <input
            type="text"
            className="form-control"
            name="longitude"
            value={longitude}
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => edituserdetails()}
          >
            Submit
          </button>
          <NavLink to="/" type="button" className="btn btn-primary m-3 p-2">
            Go Back
          </NavLink>
        </div>
      </form>
    </div>
  );
}
export default Edituser;
