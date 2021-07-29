import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Post from "./Post";
import { useSelector } from "react-redux";
import { themeContext } from "./context";

function SepPost() {
  const posts = useSelector((state) => state.posts.posts);
  let { postId } = useParams();
  const history = useHistory();
  const { theme } = useContext(themeContext);

  return (
    <div className={`big-wrap ${theme}`}>
      <Post post={posts[postId]} index={postId} />
      <button onClick={() => history.push("/home")}>Go Back</button>
    </div>
  );
}

export default SepPost;
