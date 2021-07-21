import React, {useState, useEffect} from 'react';

function Posts ({post}){

	const {date, user, text} = post
	const [edit, setEdit] = useState(false)


	return (
		<div className = 'post'> 
			<p>{user}</p>
			<p>{text}</p>
			<p>{date}</p>
			{edit && <button onClick={}>X</button>}
			{edit ? <button onClick={}>ды</button> : <button onClick={}>ды</button>}
		</div>
	)
}

export default Posts