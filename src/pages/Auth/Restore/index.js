import React, { useState, useEffect } from "react";

import { restoreAccountRequest } from "~/store/modules/auth/actions";
import { useDispatch } from "react-redux";
import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");
  const [modal, setModal] = useState(false);

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
    };

    dispatch(restoreAccountRequest(body));
    setModal(true);
  }

  return (
    <View
      width={width}
      username={username}
      setUsername={setUsername}
      modal={modal}
      setModal={setModal}
      submit={submit}
    />
  );
}

export default Index;
