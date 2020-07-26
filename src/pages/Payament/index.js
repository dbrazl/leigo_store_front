import React, { useState, useEffect } from "react";

import View from "./view";

function Index() {
  const [selected, setSelected] = useState("Cartão de crédito");
  const [width, setWidth] = useState(window.innerWidth);
  const [rotate, setRotate] = useState(false);
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cvv, setCvv] = useState("000");
  const [valid, setValid] = useState("00/0000");
  const [name, setName] = useState("nome do proprietário");

  useEffect(() => {
    if (cardNumber.length === 0) setCardNumber("0000 0000 0000 0000");
    if (cvv.length === 0) setCvv("000");
    if (valid.length === 0) setValid("00/0000");
    if (name.length === 0) setName("nome do proprietário");
  }, [cardNumber, cvv, valid, name]);

  function onGrantLostFocus() {
    setRotate(!rotate);
  }

  return (
    <View
      selected={selected}
      setSelected={setSelected}
      width={width}
      rotate={rotate}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      cvv={cvv}
      setCvv={setCvv}
      valid={valid}
      setValid={setValid}
      name={name}
      setName={setName}
      onGrantLostFocus={onGrantLostFocus}
    />
  );
}

export default Index;
