import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import "./App.css";
import CandidateComponent from "./containers/CandidateComponent";
import CandidateListing from "./containers/CandidateListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CandidateComponent} />
          <Route path="/candidate/:productId" component={CandidateListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
