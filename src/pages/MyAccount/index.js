import React, { useState, useEffect } from "react";

import { signOut } from "~/store/modules/auth/actions";
import {
  updateAvatarRequest,
  updateUserRequest,
} from "../../store/modules/user/actions";
import { indexPayamentsRequest } from "~/store/modules/payament/actions";
import { indexProductsRequest } from "~/store/modules/products/actions";
import { useDispatch, useSelector } from "react-redux";

import View from "./view";

function Index() {
  const user = useSelector((state) => state.user.profile);
  const products = useSelector((state) => state.products.products);
  const payaments = useSelector((state) => state.payament.payaments);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function openInput() {
    const input = document.querySelector("#file");
    input.click();
  }

  function onSelectFile(event) {
    const file = event.target.files[0];
    dispatch(updateAvatarRequest(file));
  }

  useEffect(() => {
    dispatch(indexProductsRequest());
    dispatch(indexPayamentsRequest());
  }, []);

  function update() {
    let body = {};

    if (name !== user.name) body.name = name;
    if (username !== user.username) body.username = username;
    if (email !== user.email) body.email = email;
    if (password.length > 0) body.password = password;

    setPassword("");
    dispatch(updateUserRequest(body));
  }

  function logout() {
    dispatch(signOut());
  }

  return (
    <View
      openInput={openInput}
      onSelectFile={onSelectFile}
      logout={logout}
      update={update}
      username={username}
      setUsername={setUsername}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      avatar={user.avatar}
      payaments={payaments}
      products={products}
    />
  );
}

export default Index;
