import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import avatar from "../img/avatar.jpg";
import EditableField from "./EditableFIeld";
import TextArea from "./TextArea";
import LinkPost from "./LinkPost";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector((state) => state.userData.userData);

  const isLogged = useSelector((state) => state.login.isLogged);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const posts = useSelector((state) => state.posts.posts);

  const history = useHistory();

  function logInHandler() {
    history.push("/login");
  }

  function themeHandler() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="wrap">
      <div className="header">
        <button className="button" onClick={themeHandler}>
          {isDarkTheme ? "Light" : "Dark"}
        </button>
        <button className="button" onClick={logInHandler}>
          {isLogged ? "LogOut" : "LogIn"}
        </button>
      </div>
      <div className="main">
        <div className="userInfo">
          <img src={avatar} alt="fat kitty FloGus" className="userAvatar"></img>
          <div className="userData">
            {Object.entries(userData).map(([key, value]) => (
              <EditableField
                value={value}
                keyObj={key}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
        <div className="posts">
          <div className="createPost">
            <TextArea />
          </div>
          <div className="feed">
            {posts.map((item, index) => (
              <LinkPost post={item} index={index} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
