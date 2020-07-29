import React, { useState, useEffect } from "react";

import { signUpRequest } from "~/store/modules/auth/actions";
import { useDispatch } from "react-redux";

import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");

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
      name,
      email,
      password,
      cpf,
    };

    dispatch(signUpRequest(body));
  }

  return (
    <View
      width={width}
      username={username}
      setUsername={setUsername}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      cpf={cpf}
      setCpf={setCpf}
      submit={submit}
    />
  );
}

export default Index;
