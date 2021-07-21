import React, {useState, useEffect} from 'react'

function EditableField (props) {

	const {value, keyObj, setUserData, userData} = props;
	const [edit, setEdit] = useState(false);
	const [word, setWord] = useState('');

	useEffect(() => {setWord(value)}, [value])

	function editHandler (){
		setEdit(!edit)
	}

	function confirmHandler (){
		setUserData({...userData, [keyObj]: word})
	}

	function buttonHandler(e){
		if (e.key === 'Enter'){
			confirmHandler();
			editHandler()
			
		}

	}

	function valueHandler(e){
		setWord(e.target.value)
	}

	return (
		<div className = 'userLine'>
			{edit ? <input className = 'userItem' value = {word} onChange={valueHandler} onKeyPress={buttonHandler}></input> : <p className = 'userItem'>{value}</p> }
			{edit && <button className = 'userEdit' onClick = {(e) => {editHandler();confirmHandler()}} >OK</button>}
			<button className = 'userEdit' onClick = {(e) => {editHandler()}}>{edit ? 'X': '\u270E'}</button>
		
		</div>
	)
}

export default EditableField