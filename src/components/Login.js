import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoggedIn } from './slices/LoginSlice'
import { useState, useContext } from 'react'
import { themeContext } from "./context";


function Login (){

	const loginData = useSelector((state) => state.login.login)
	const dispatch = useDispatch();
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const {theme} = useContext(themeContext)
	
	const history = useHistory()

	function loginHandler(){
		if(loginData.login !== login){
			alert('Incorrect Login')
		}else if(loginData.password !== password){
			alert('Incorrect Password')
		}else {
			dispatch(toggleLoggedIn())
			history.push('/home')
		}
	}

	return (
		<div className = {`big-wrap ${theme}`}>
			<div className = 'login'>
				<div className = 'login-inputs'>
					<p>Login</p>
					<input type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>
					<p>Password</p>
					<input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<div className = 'login-buttons'>
					<button onClick={loginHandler}>LogIn</button>
					<button onClick={()=> history.push('/home')}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default Login