import React, {useState, useEffect} from 'react';
import { format } from 'date-fns'


function TextArea(props) {
	const {setPosts, posts, isLogged, userData} = props;
	const [value, setValue] = useState('')

	function changeHandler ({target}){
		setValue(target.value)
	}

	function postHandler(){
		if (value){
			setPosts([ {
				date: format(new Date(2014, 1, 11), 'MM/dd/yyyy'),
				user: isLogged ? userData.nickname : 'guest',
				text: value,
			}, ...posts])

			setValue('')
		}

	}

	return (
		<>
			<textarea className = 'post-input' maxLength = '100' onChange={changeHandler} value = {value}></textarea>
			<button className = 'post-confirm' onClick={postHandler}>post</button>
		</>
	)
}

export default TextArea