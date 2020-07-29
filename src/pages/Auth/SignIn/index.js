import React, { useState, useEffect } from "react";

import { signInRequest } from "~/store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";

import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  function resizeEvent() {
    setWidth(window.innerWidth);
  }

  function submit() {
    const body = {
      username,
      password,
    };

    dispatch(signInRequest(body));
  }

  return (
    <View
      width={width}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      submit={submit}
    />
  );
}

export default Index;
