import React from "react";

import { updateAvatarRequest } from "../../store/modules/user/actions";
import { useDispatch } from "react-redux";

import View from "./view";

function Index() {
  const dispatch = useDispatch();

  function openInput() {
    const input = document.querySelector("#file");
    input.click();
  }

  function onSelectFile(event) {
    const file = event.target.files[0];
    dispatch(updateAvatarRequest(file));
  }

  return <View openInput={openInput} onSelectFile={onSelectFile} />;
}

export default Index;
