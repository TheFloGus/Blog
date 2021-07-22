import React from 'react';
import { useHistory } from "react-router-dom";
import Post from './Post'

function LinkPost ({post, setPosts, posts, indexx}){

	const history = useHistory();

	return (
		<div className = 'post-container' onClick={() => history.push(`/posts/${indexx}`)}>
			<Post 
				post = {post} 
				setPosts = {setPosts} 
				posts = {posts} 
				indexx = {indexx} />
		</div>
	)
}

export default LinkPost;