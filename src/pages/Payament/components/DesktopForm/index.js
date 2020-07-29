import React from "react";
import PropTypes from "prop-types";

import Header from "../../../../components/Header";
import {
  Container,
  Column,
  FlipCard,
  FlipCardInner,
  CardFront,
  CardBack,
  Form,
  WrapperInput,
  SmallLabel,
  CardInput,
  Row,
  CVVInput,
  DateInput,
  Input,
  Footer,
  Back,
  Button,
  CreditCard,
  Flag,
  NameCard,
  WrapperDate,
  ValidDate,
  CardNumber,
  Emblem,
  Bar,
  CVV,
  Sell,
  Quantity,
  Total,
  Buttons,
  Centralize,
  Baseline,
  Dolar,
} from "./styles";

function DesktopForm({
  rotate,
  cardNumber,
  setCardNumber,
  cvv,
  setCvv,
  valid,
  setValid,
  name,
  setName,
  onGrantLostFocus,
  selected,
  total,
  amount,
}) {
  const price = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function renderBillet() {
    return (
      <>
        <Centralize>
          <Baseline>
            <Quantity>{amount}</Quantity>
            <SmallLabel>{amount === 1 ? "item" : "items"}</SmallLabel>
          </Baseline>
          <Baseline marginTop={30}>
            <Total>{price}</Total>
          </Baseline>
        </Centralize>
        <Footer>
          <Buttons>
            <Back to="/cart">voltar</Back>
            <Button>
              <Dolar />
            </Button>
          </Buttons>
        </Footer>
      </>
    );
  }

  function renderCreditCard() {
    return (
      <Container>
        <Column>
          <FlipCard rotate={rotate}>
            <FlipCardInner rotate={rotate}>
              <CardFront>
                <Emblem />
                <CardNumber>{cardNumber}</CardNumber>
                <WrapperDate>
                  <SmallLabel fontSize={12} color="#fff">
                    VALID
                  </SmallLabel>
                  <ValidDate>{valid}</ValidDate>
                </WrapperDate>
                <NameCard>{name.toUpperCase()}</NameCard>
                <Flag />
              </CardFront>
              <CardBack>
                <Bar />
                <CVV>{cvv}</CVV>
              </CardBack>
            </FlipCardInner>
          </FlipCard>
        </Column>
        <Column>
          <Form>
            <WrapperInput>
              <SmallLabel>número do cartão</SmallLabel>
              <CardInput
                placeholder="0000 0000 0000 0000"
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </WrapperInput>
            <Row marginTop={30}>
              <WrapperInput>
                <SmallLabel>CVV</SmallLabel>
                <CVVInput
                  placeholder="000"
                  onChange={(event) => setCvv(event.target.value)}
                  onFocus={() => onGrantLostFocus()}
                  onBlur={() => onGrantLostFocus()}
                />
              </WrapperInput>
              <WrapperInput>
                <SmallLabel>expiração</SmallLabel>
                <DateInput
                  placeholder="00/0000"
                  onChange={(event) => setValid(event.target.value)}
                />
              </WrapperInput>
            </Row>
            <WrapperInput marginTop={30}>
              <SmallLabel>nome do proprietário</SmallLabel>
              <Input
                placeholder="nome do proprietário"
                onChange={(event) => setName(event.target.value)}
              />
            </WrapperInput>
          </Form>
        </Column>
        <Footer>
          <Sell>
            <Quantity>{amount}</Quantity>
            <SmallLabel fontSize={24}>
              {amount === 1 ? "item" : "items"}
            </SmallLabel>
            <Total marginLeft={50}>{price}</Total>
          </Sell>
          <Buttons>
            <Back to="/cart">voltar</Back>
            <Button>
              <CreditCard />
            </Button>
          </Buttons>
        </Footer>
      </Container>
    );
  }
  return <>{selected === "Boleto" ? renderBillet() : renderCreditCard()}</>;
}

DesktopForm.propTypes = {
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
  selected: PropTypes.string,
  total: PropTypes.number,
  amount: PropTypes.number,
};

DesktopForm.defaultProps = {
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
  selected: "Boleto",
  total: 0,
  amount: 0,
};

export default DesktopForm;
