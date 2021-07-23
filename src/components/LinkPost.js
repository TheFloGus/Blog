import React from 'react';
import { useHistory } from "react-router-dom";
import Post from './Post'

function LinkPost ({post, setPosts, posts, index}){

	const history = useHistory();

	return (
		<div className = 'post-container' onClick={() => history.push(`/posts/postId${index}`)}>
			<Post 
				post = {post} 
				setPosts = {setPosts} 
				posts = {posts} 
				index = {index} />
		</div>
	)
}

export default LinkPost;