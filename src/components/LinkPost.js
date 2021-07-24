import React from 'react';
import { useHistory } from "react-router-dom";
import Post from './Post'

function LinkPost ({post, index}){

	const history = useHistory();

	return (
		<div className = 'post-container' onClick={() => history.push(`/posts/postId${index}`)}>
			<Post 
				post = {post}  
				index = {index} />
		</div>
	)
}

export default LinkPost;