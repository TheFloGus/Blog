import { useHistory } from "react-router-dom";


function Login (){
	
	const history = useHistory()
	return (
		<div className = 'login'>
			<p>Login</p>
			<input type="text"></input>
			<p>Password</p>
			<input type="password"></input>
			<button onClick={() => history.push('/home')}>go home</button>
		</div>
	)
}

export default Login