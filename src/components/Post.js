import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function Post ({post, setPosts, posts, indexx}){

	const {date, user, text} = post
	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(text)
	const history = useHistory()

	function  changeHandler({target}){
		setValue(target.value)
		
	}

	function confirmHandler(){
		post.text = value
		const newPosts = posts;
		newPosts[indexx] = post;
		setPosts(newPosts)
		setEdit(false)
	}

	function deleteHandler(){
		let newPosts = posts.filter((item, index) => (indexx !== index))
		setPosts(newPosts)
	}

	return (
		<div className = 'post' > 
			<div className = 'post-head'>
				<p className = 'user-name'>{user}</p>
				<div>
					{edit ? <button onClick={confirmHandler}>conf</button> : <button onClick={() => setEdit(true)}>edit</button>}
					{edit && <button onClick={() => {setEdit(false); setValue(text)}}>X</button>}
					{edit || <button onClick = {deleteHandler}>del</button>}
				</div>
			</div>
			{edit ? <textarea className = 'post-input' maxLength = '100' onChange={changeHandler} value = {value}></textarea> : <p className = 'post-text'>{text}</p>}
			<p className="post-date">{date}</p>
			
			
		</div>
	)
}

export default Post