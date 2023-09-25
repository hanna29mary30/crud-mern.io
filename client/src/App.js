import "./App.css";
import Adduser from "./Adduser";
import Nav from "./Nav";
import Addtable from "./Addtable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edituser from "./Edituser";
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("users");
  return (<MyContext.Provider value={{ search, setSearch }}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Addtable />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
