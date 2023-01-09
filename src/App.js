import React from "react";
import Alphabet from "./components/Alphabet.jsx";
import Animals from "./components/Animals.jsx";
import Flowers from "./components/Flower.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <div className="link-container">
      <Link to="/alphabet" className="App_Nav_Link">
      {" "}
      Alphabet
      </Link>
      <Link to="/animals" className="App_Nav_Link">
      {" "}
      Animals
      </Link>{" "}
      <Link to="/flower" className="App_Nav_Link">
      {" "}
      Flower
      </Link>
      </div>
        <Routes>
          <Route path="/alphabet" element={<Alphabet />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          <Route path="/flower" element={<Flowers />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
