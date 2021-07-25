import React from 'react';
import { useHistory } from "react-router-dom";
import Post from './Post'
import PropTypes from "prop-types";

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

LinkPost.propTypes = {
	post: PropTypes.object,
	index: PropTypes.number,
};

export default LinkPost;