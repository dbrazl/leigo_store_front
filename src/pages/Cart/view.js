import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import List from "../../components/List";
import {
  Container,
  Painel,
  Button,
  Baseline,
  Label,
  Total,
  Quantity,
  PainelItems,
  Info,
} from "./styles";

function View({ width, products, amount, total }) {
  function renderInfo(justify = "baseline") {
    const price = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <>
        <Baseline justify="baseline">
          <Quantity>{amount}</Quantity>
          <Label>{amount === 1 ? "item" : "items"}</Label>
        </Baseline>
        <Baseline justify={justify}>
          <Label>total</Label>
          <Total>{price}</Total>
        </Baseline>
      </>
    );
  }

  return (
    <Container>
      <Header />
      {width < 824 && <Info>{renderInfo("center")}</Info>}
      <Painel>
        <PainelItems>
          {amount > 0 && <Button to="/payament">fechar pedido</Button>}
          {width > 824 && renderInfo()}
        </PainelItems>
      </Painel>
      <List noFilters products={products} topList={width < 824 ? 0 : 250} />
    </Container>
  );
}

View.propTypes = {
  width: PropTypes.number,
  products: PropTypes.array,
  amount: PropTypes.number,
  total: PropTypes.number,
};

View.defaultProps = {
  width: window.innerWidth,
  products: [],
  amount: 0,
  total: 0,
};

export default View;
