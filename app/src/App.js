import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'




  function App() {

        return (
          <Router>
            <Route exact path="/" component={Home} />

          </Router>
        );
    }
  


export default App;
