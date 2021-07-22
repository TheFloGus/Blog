import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import avatar from '../img/avatar.jpg'
import EditableField from './EditableFIeld'
import TextArea from './TextArea'
import LinkPost from './LinkPost'
import { v4 as uuidv4 } from 'uuid';



function Home({posts, setPosts}) {
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

	
	const history = useHistory()

	function logInHandler () {
		history.push('/login')
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
					{ Object.entries(userData).map(([key, value], index) => <EditableField value={value} keyObj = {key} key = {uuidv4()} setUserData = {setUserData} userData = {userData}/>)}
				</div>
			</div>
			<div className = 'posts'>
				<div className = 'createPost'>
					<TextArea setPosts = {setPosts} posts = {posts} isLogged = {isLogged} userData = {userData}/>
				</div>
				<div className = 'feed'>
					{posts.map((item, index) => <LinkPost 
					post = {item} 
					setPosts = {setPosts} 
					posts = {posts} 
					indexx = {index} 
					key = {uuidv4()} />)}
				</div>
			</div>
		</div>
	</div>
  );

} 

export default Home