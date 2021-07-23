import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import Post from './Post'
import { useSelector } from "react-redux";

function SepPost (){
	const posts = useSelector((state) => state.posts.posts)
	let { postId } = useParams();
	const history = useHistory();

	return (
		<>
			<Post post = {posts[postId]}  index = {postId} />
			<button onClick= {() => history.push('/home')}>Go Back</button>
		</>
	)
	
}

export default SepPost;