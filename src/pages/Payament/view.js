import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

import { Container, Menu, Nav, Name } from "./styles";

function View({
  selected,
  setSelected,
  width,
  rotate,
  cardNumber,
  setCardNumber,
  setCvv,
  cvv,
  valid,
  setValid,
  name,
  setName,
  onGrantLostFocus,
  total,
  amount,
}) {
  const tabs = ["Cartão de crédito", "Boleto"];

  function renderTabs(tab) {
    if (tab === selected)
      return (
        <Nav>
          <Name selected onClick={() => setSelected(tab)}>
            {tab}
          </Name>
        </Nav>
      );

    return (
      <Nav>
        <Name onClick={() => setSelected(tab)}>{tab}</Name>
      </Nav>
    );
  }

  return (
    <Container>
      <Header />
      <Menu>{tabs.map((tab) => renderTabs(tab))}</Menu>
      {width < 1024 ? (
        <MobileForm
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
          selected={selected}
          total={total}
          amount={amount}
        />
      ) : (
        <DesktopForm
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
          selected={selected}
          total={total}
          amount={amount}
        />
      )}
    </Container>
  );
}

View.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
  width: PropTypes.number,
  rotate: PropTypes.bool,
  cardNumber: PropTypes.string,
  setCardNumber: PropTypes.func,
  cvv: PropTypes.string,
  setCvv: PropTypes.func,
  valid: PropTypes.string,
  setValid: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  onGrantLostFocus: PropTypes.func,
  total: PropTypes.number,
  amount: PropTypes.number,
};

View.defaultProps = {
  selected: "",
  setSelected: () => {},
  width: window.innerWidth,
  rotate: false,
  cardNumber: "",
  setCardNumber: () => {},
  cvv: "000",
  setCvv: () => {},
  valid: "00/0000",
  setValid: () => {},
  name: "nome do proprietário",
  setName: () => {},
  onGrantLostFocus: () => {},
  total: 0,
  amount: 0,
};

export default View;
