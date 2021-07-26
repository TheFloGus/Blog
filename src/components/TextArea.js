import React, { useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./slices/PostsSlice";

function TextArea() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);
  const isLogged = useSelector((state) => state.login.isLoggedIn.isLogged);
  const [value, setValue] = useState("");

  function changeHandler({ target }) {
    setValue(target.value);
  }

  function postHandler() {
    if (value) {
      dispatch(
        addItem({
          date: format(new Date(), "MM/dd/yyyy"),
          user: isLogged ? userData.nickname : "guest",
          text: value,
        })
      );

      setValue("");
    }
  }

  return (
    <>
      <textarea
        className="post-input"
        maxLength="100"
        onChange={changeHandler}
        value={value}
      ></textarea>
      <button className="post-confirm" onClick={postHandler}>
        post
      </button>
    </>
  );
}

export default TextArea;
