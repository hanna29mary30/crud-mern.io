import "./App.css";
import Adduser from "./Adduser";
import Nav from "./Nav";
import Addtable from "./Addtable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edituser from "./Edituser";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Addtable />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
