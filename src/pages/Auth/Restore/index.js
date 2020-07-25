import React, { useState, useEffect } from "react";

import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  function resizeEvent() {
    setWidth(window.innerWidth);
  }

  return <View width={width} />;
}

export default Index;
