import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Alias from "./components/Alias";
import Users from "./components/Users";
import CarAssignment from "./components/CarAssignment";

export default function App() {
  return (
    <Router>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">Travel App</h3>
        <Navbar />
        <br />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/carassignment" element={<CarAssignment />} />
          <Route path="/alias" element={<Alias />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}
