import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
import avatar from './img/avatar.jpg'
import EditableField from './EditableFIeld'
import TextArea from './TextArea'
import Posts from './Posts'

function App() {

	const [isLogged, setIsLogged] = useState(false);
	const [loginData, setLoginData] = useState({
		login: 'theFloGus',
		password: '12345678'
	})
	const [userData, setUserData] = useState({
		nickname: 'FloGus',
		fullName: 'Бреднев Евгений Сергеевич',
		birthDate: '02.02.1999',
		description: 'lazy cat',
	})
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const [posts, setPosts] = useState([])

	function logInHandler () {
		setIsLogged(!isLogged)
	}

	function themeHandler(){
		setIsDarkTheme(!isDarkTheme)
	}




  return (
    <div className = 'wrap'>
		
		<div className = 'header'>
			<button className = 'button' onClick = {themeHandler}>{isDarkTheme ? 'Light' : 'Dark'}</button>
			<button className = 'button' onClick = {logInHandler}>{isLogged ? 'LogOut' : 'LogIn'}</button>
		</div>
		<div className = 'main'>
			<div className = 'userInfo'>
					<img src = {avatar} alt = 'fat kitty FloGus' className = 'userAvatar'></img>
				<div className = 'userData'>
					{ Object.entries(userData).map(([key, value], index) => <EditableField value={value} keyObj = {key} key = {index} setUserData = {setUserData} userData = {userData}/>)}
				</div>
			</div>
			<div className = 'posts'>
				<div className = 'createPost'>
					<TextArea setPosts = {setPosts} posts = {posts} isLogged = {isLogged} userData = {userData}/>
				</div>
				<div className = 'feed'>
					{posts.map(item => <Posts post = {item} is/>)}
				</div>
			</div>
		</div>

		<div className = 'loginModal'>
			
		</div>

	</div>
  );
}

export default App;
