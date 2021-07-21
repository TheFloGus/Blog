import React, {useState, useEffect } from 'react';

import './App.css';


import Login from './Login'
import {
	Switch,
	Route,
  } from "react-router-dom";

import Home from './Home'

function App() {

	return (
		<Switch>
      <Route exact path="/login">
		  <Login />
      </Route>
	  <Route exact path="/home">
		  <Home />
	  </Route>
    </Switch>

	)
}

export default App;
