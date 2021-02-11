import logo from "./logo.svg";
import Drawing1 from "./Drawing/Drawing";
import "./App.css";
import React from "react";
import Sketch from "react-p5";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Drawing from "./Drawing/Drawing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
 

  return (
    //   <div className="App" onMouseUp={handleEvent} onMouseDown={handleEvent} >
    //     <Drawing1></Drawing1>
    //   
    // </div>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/drawing">
            <Drawing>
           
            </Drawing>
           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
