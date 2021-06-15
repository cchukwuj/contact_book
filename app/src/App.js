import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Log from './components/Log'
import Insert from './components/Insert'




  function App() {

        return (
          <Router>
            <Route exact path="/" component={Log} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/insert" component={Insert} />


          </Router>
        );
    }
  


export default App;
