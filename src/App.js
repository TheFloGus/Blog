import React from 'react';
import './App.css';
import Login from './components/Login'
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import SepPost from './components/SepPost'



function App() {
	// const [posts, setPosts] = useState([])
	// const [isLogged, setIsLogged] = useState(false);
	// const [loginData, setLoginData] = useState({
		
	// })

	return (
		<Switch>
      <Route exact path="/login">
		  <Login 
		   />
      </Route>
	  <Route exact path="/home">
		  <Home 
		  />
	  </Route>
	  <Route exact path="/posts/postId:postId">
		  <SepPost />
	  </Route>
    </Switch>

	)
}

export default App;
