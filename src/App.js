import React, {useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login'
import {
	Switch,
	Route,
  } from "react-router-dom";
import Home from './components/Home'
import SepPost from './components/SepPost'


function App() {
	const [posts, setPosts] = useState([])

	return (
		<Switch>
      <Route exact path="/login">
		  <Login />
      </Route>
	  <Route exact path="/home">
		  <Home posts = {posts} setPosts={setPosts} />
	  </Route>
	  <Route exact path="/posts/:postId">
		  <SepPost posts = {posts} setPosts={setPosts}/>
	  </Route>
    </Switch>

	)
}

export default App;
