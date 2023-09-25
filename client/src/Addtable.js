import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect ,useContext} from "react";
import { getUsers, deleteUser } from "./api";
import Swal from "sweetalert2";
import Pagination from "./Pagination";
import { MyContext } from './MyContext';

export const searchdisp = (search) => {
  console.log(search)
  // setUsers(search);
}
const Addtable = () => {
  const [users, setUsers] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const { search, setSearch } = useContext(MyContext);
  const recordPerPage = 8;
  const lastIndex = CurrentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const pages = Math.ceil(users.length / recordPerPage);
  const numbers = [...Array(pages + 1).keys()].slice(1);
 
 ; useEffect(() => {
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
    <div className="container-fluid">
      <div className="table-responsive p-3 m-2">
        <h3 className="text-center fw-bolder">Customer Details</h3>
        <div className="d-flex align-items-center">
          <NavLink to="/add" type="button" className="btn btn-primary m-2 p-2">
            Add New Customers
          </NavLink>
        </div>
        <div className="mt-3"></div>
        <table className="table table-bordered table-hover table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th style={{ height: "50px" }}>ID</th>
              <th style={{ height: "50px" }}>Email</th>
              <th style={{ height: "50px" }}>First Name</th>
              <th style={{ height: "50px" }}>Last Name</th>
              <th style={{ height: "50px" }}>IP</th>
              <th style={{ height: "50px" }}>Latitude</th>
              <th style={{ height: "50px" }}>Longitude</th>
              <th style={{ height: "50px" }}>Created at</th>
              <th style={{ height: "50px" }}>Updated at</th>
              <th style={{ height: "50px" }} colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((user) => (
              <tr key={user.id} style={{ height: "50px" }}>
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
                  <div className="d-flex justify-content-center">
                    <NavLink
                      type="button"
                      className="btn btn-primary m-2"
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </NavLink>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete
                    </button>
                  </div>
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
    </div>
  );
  function changeCPage(id) {
    setCurrentPage(id);
  }
};

export default Addtable;
