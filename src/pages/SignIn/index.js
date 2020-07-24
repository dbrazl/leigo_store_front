import React, { useState, useEffect } from "react";

import { setRoute } from "../../store/modules/route/actions";
import { useDispatch } from "react-redux";

import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.width);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    window.scrollTo(0, 0);

    dispatch(setRoute("Login"));

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  function resizeEvent() {
    setWidth(window.innerWidth);
  }

  return <View width={width} />;
}

export default Index;
