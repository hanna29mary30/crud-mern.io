import { useState, useEffect } from "react";
import { getUsers } from "./api";
import {searchdisp} from "./Addtable"

const Nav = () => {
  const [users, setUsers] = useState([]);
  const [searchval, setSearchval] = useState();
  const [search, setSearch] = useState(users);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  const Search = (val) => {
    setSearchval(val);
    if (val != "") {
      // console.log(searchval);
      const searcheddata = users.filter((f) =>
        f.first_name.toLowerCase().includes(searchval)
      );
      // console.log(searcheddata);
      setSearch(searcheddata);
      
      
    } else {
      setSearch(users);
      
    }
  };
  return (
    <div className="mr-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <a className="navbar-brand text-light ml-4">
          Customer Details Management
        </a>
        <div className="d-flex flex-column flex-lg-row">
        <div className="auto-right">
          <input
            className="form-control"
            value={searchval}
            id="searchinput"
            type="search "
            placeholder="Search using first name"
            aria-label="Search"
            onChange={(e) => Search(e.target.value)}
          />
        </div>
        
        <div>
        <button type="button" className="btn btn-primary" onClick={() => searchdisp(search,setUsers)}>Search</button>
        
        </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
