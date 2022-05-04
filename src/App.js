import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import "./App.css";
import CandidateComponent from "./containers/CandidateComponent";
import CandidateListing from "./containers/CandidateListing";
import PrivateRoute from "./PrivateRouting/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CandidateComponent />} />
          <Route element={<PrivateRoute />}>
            <Route path="/candidate/:id" element={<CandidateListing />} />
          </Route>
          <Route path="*" element={"ERROR 404 NOT FOUND"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
