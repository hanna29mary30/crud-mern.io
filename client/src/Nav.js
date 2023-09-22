import { useState, useEffect } from "react";
import { getUsers } from "./api";
import Addtable from "./Addtable";
import { useSearch } from "./SearchContext";
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
      console.log(searchval);
      const searcheddata = users.filter((f) =>
        f.first_name.toLowerCase().includes(searchval)
      );
      console.log(searcheddata);
      setSearch(searcheddata);
    } else {
      setSearch(users);
    }
  };
  return (
    <div className="mr-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <a className="navbar-brand text-light ml-4" >
          Customer Details Management
        </a>
        <div className="mr-4">
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
      </nav>
    </div>
  );
};
export default Nav;
