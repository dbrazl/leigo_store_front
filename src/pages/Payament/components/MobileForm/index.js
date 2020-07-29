import React from "react";
import PropTypes from "prop-types";

import {
  FlipCard,
  FlipCardInner,
  CardFront,
  CardBack,
  WrapperInput,
  SmallLabel,
  Row,
  Input,
  InputCVV,
  InputCard,
  InputDate,
  Button,
  CreditCard,
  Back,
  Baseline,
  Quantity,
  Total,
  Dolar,
  Centralize,
  Footer,
  Flag,
  Name,
  Valid,
  CardNumber,
  Bar,
  CVV,
} from "./styles";

function MobileForm({
  rotate,
  cardNumber,
  setCardNumber,
  cvv,
  setCvv,
  valid,
  setValid,
  name,
  setName,
  selected,
  onGrantLostFocus,
}) {
  function renderCreditCard() {
    return (
      <>
        <FlipCard rotate={rotate}>
          <FlipCardInner rotate={rotate}>
            <CardFront>
              <Name>{name.toUpperCase()}</Name>
              <Flag />
              <Valid>{valid}</Valid>
              <CardNumber>{cardNumber}</CardNumber>
            </CardFront>
            <CardBack>
              <Bar />
              <CVV>{cvv}</CVV>
            </CardBack>
          </FlipCardInner>
        </FlipCard>
        <WrapperInput>
          <SmallLabel>número do cartão</SmallLabel>
          <InputCard
            placeholder="0000 0000 0000 0000"
            onChange={(event) => setCardNumber(event.target.value)}
          />
        </WrapperInput>
        <Row>
          <WrapperInput>
            <SmallLabel>CVV</SmallLabel>
            <InputCVV
              placeholder="000"
              onFocus={() => onGrantLostFocus()}
              onBlur={() => onGrantLostFocus()}
              onChange={(event) => setCvv(event.target.value)}
            />
          </WrapperInput>
          <WrapperInput>
            <SmallLabel>expiração</SmallLabel>
            <InputDate
              placeholder="00/0000"
              onChange={(event) => setValid(event.target.value)}
            />
          </WrapperInput>
        </Row>
        <WrapperInput>
          <SmallLabel>nome do proprietário</SmallLabel>
          <Input
            placeholder="nome do proprietário"
            onChange={(event) => setName(event.target.value.toUpperCase())}
          />
        </WrapperInput>
        <Button>
          <CreditCard />
        </Button>
        <Back to="/cart">voltar</Back>
      </>
    );
  }

  function renderBillet() {
    return (
      <>
        <Centralize>
          <Baseline>
            <Quantity>4</Quantity>
            <SmallLabel>items</SmallLabel>
          </Baseline>
          <Baseline marginTop={30}>
            <Total>R$ 260,00</Total>
          </Baseline>
        </Centralize>
        <Footer>
          <Button>
            <Dolar />
          </Button>
          <Back to="/cart">voltar</Back>
        </Footer>
      </>
    );
  }

  return <>{selected === "Boleto" ? renderBillet() : renderCreditCard()}</>;
}

MobileForm.propTypes = {
  rotate: PropTypes.bool,
  cardNumber: PropTypes.string,
  setCardNumber: PropTypes.func,
  cvv: PropTypes.string,
  setCvv: PropTypes.func,
  valid: PropTypes.string,
  setValid: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  selected: PropTypes.string,
  onGrantLostFocus: PropTypes.func,
};

MobileForm.defaultProps = {
  rotate: false,
  cardNumber: "0000 0000 0000 0000",
  setCardNumber: () => {},
  cvv: "000",
  setCvv: () => {},
  valid: "00/0000",
  name: "nome do proprietário",
  setName: () => {},
  selected: "Boleto",
  onGrantLostFocus: () => {},
};

export default MobileForm;
