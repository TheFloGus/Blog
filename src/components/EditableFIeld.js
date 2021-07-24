import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "./slices/userDataSlice"

function EditableField (props) {

	const {value, keyObj} = props;
	const isLogged = useSelector((state) => state.login.isLoggedIn.isLogged)
	const [edit, setEdit] = useState(false);
	const [word, setWord] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {setWord(value)}, [value])

	function editHandler (){
		setEdit(!edit)
	}

	function confirmHandler (){
		
		dispatch(editItem({word, keyObj}))
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
			{isLogged && <button className = 'userEdit' onClick = {(e) => {editHandler()}}>{edit ? 'X': '\u270E'}</button>}
		
		</div>
	)
}

export default EditableField