import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import View from "./view";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const products = useSelector((state) => state.cart.products);
  const amount = useSelector((state) => state.cart.amount);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  function resizeEvent() {
    const { innerWidth } = window;
    setWidth(innerWidth);
  }

  return (
    <View width={width} products={products} amount={amount} total={total} />
  );
}

export default Index;
