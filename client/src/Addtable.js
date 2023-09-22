import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api";
import Swal from "sweetalert2";
import Pagination from "./Pagination";

const Addtable = () => {
  const [users, setUsers] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = CurrentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const pages = Math.ceil(users.length / recordPerPage);
  const numbers = [...Array(pages + 1).keys()].slice(1);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "error",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      await deleteUser(id);
      getAllUsers();
    });
  };

  return (
    <div className="table-resposive p-3 m-2">
      <h3 className="text-center">Customer Details</h3>
      <NavLink to="/add" type="button" className="btn btn-primary m-3 p-2">
        Add New Customers
      </NavLink>
      <table className="table table-bordered table-hover table-striped ">
        <thead className="table table-dark">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>IP</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.ip}</td>
              <td>{user.latitude}</td>
              <td>{user.longitude}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
              <td>
                <NavLink
                  type="button"
                  className="btn btn-primary m-4"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </NavLink>
                <button
                  className="btn btn-danger m-4"
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Pagination
          currentPage={CurrentPage}
          totalPages={pages}
          onPageChange={changeCPage}
        />
      </div>
    </div>
  );
  function changeCPage(id) {
    setCurrentPage(id);
  }
};
export default Addtable;
