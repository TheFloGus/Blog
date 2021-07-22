import { useHistory } from "react-router-dom";


function Login (){
	const history = useHistory()
	return (
		<div className = 'login'>
			<div>nice</div>
			<button onClick={() => history.push('/home')}>go home</button>
		</div>
	)
}

export default Login