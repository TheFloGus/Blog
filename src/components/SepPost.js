import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import Post from './Post'

function SepPost ({posts, setPosts}){
	let { postId } = useParams();
	const history = useHistory();

	return (
		<>
			{console.log(posts)}
			<Post post = {posts[postId]} setPosts={setPosts} posts = {posts} indexx = {postId} />
			<button onClick= {() => history.push('/home')}>Go Back</button>
		</>
	)
	
}

export default SepPost;