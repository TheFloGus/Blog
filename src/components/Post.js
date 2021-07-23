import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "./slices/PostsSlice"


function Post ({post, index}){
	const dispatch = useDispatch();
	const {date, user, text} = post
	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(text)


	function  changeHandler(e){
		setValue(e.target.value)
		e.stopPropagation()	
	}

	function confirmHandler(e){
		e.stopPropagation()
		dispatch(editItem({index, value}))
		setEdit(false)
		
	}

	function deleteHandler(e){
		dispatch(deleteItem(index))
		e.stopPropagation()
	}

	return (
		<div className = 'post' > 
			<div className = 'post-head'>
				<p className = 'user-name'>{user}</p>
				<div>
					{edit ? <button onClick={confirmHandler}>conf</button> : <button onClick={(e) => {setEdit(true); e.stopPropagation()}}>edit</button>}
					{edit && <button onClick={(e) => {setEdit(false); setValue(text); e.stopPropagation()}}>X</button>}
					{edit || <button onClick = {deleteHandler}>del</button>}
				</div>
			</div>
			{edit ? <textarea className = 'post-input' maxLength = '100' onChange={changeHandler} onClick={(e) => e.stopPropagation()} value = {value}></textarea> : <p className = 'post-text'>{text}</p>}
			<p className="post-date">{date}</p>
			
			
		</div>
	)
}

export default Post