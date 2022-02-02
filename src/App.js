import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import General from "./components/News";
import {
  Business,
  Entertainment,
  Health,
  Science,
  Sports,
  Technology,
} from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
