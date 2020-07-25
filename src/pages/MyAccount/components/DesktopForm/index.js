import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Column,
  Form,
  Photo,
  File,
  Input,
  Button,
  Cloud,
  Title,
  Card,
  ProductPhoto,
  Description,
  Request,
  WrapperQuantity,
  Quantity,
  SmallLabel,
  Info,
  Date,
  Total,
  List,
  Scroll,
} from "./styles";

function DesktopForm({ openInput, onSelectFile }) {
  const requests = [1, 2, 3, 4, 5];

  function renderRequest() {
    return (
      <Card>
        <ProductPhoto />
        <Description>
          <Request>Pedido #23</Request>
          <WrapperQuantity>
            <Quantity>4</Quantity>
            <SmallLabel>items</SmallLabel>
          </WrapperQuantity>
        </Description>
        <Info>
          <Date>02/10/1997</Date>
          <Total>R$ 260,00</Total>
        </Info>
      </Card>
    );
  }

  return (
    <Container>
      <Column>
        <Form>
          <Photo />
          <File />
          <Input placeholder="nome do usuário" marginTop={50} />
          <Input placeholder="usuário" marginTop={50} />
          <Input placeholder="e-mail" marginTop={50} />
          <Input placeholder="senha" marginTop={50} />
          <Button>
            <Cloud />
          </Button>
        </Form>
      </Column>
      <Column justify="flex-start">
        <Title>Últimos pedidos</Title>
        <List>
          {" "}
          <Scroll>{requests.map((request) => renderRequest())}</Scroll>
        </List>
      </Column>
    </Container>
  );
}

DesktopForm.propTypes = {
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
};

DesktopForm.defaultProps = {
  openInput: () => {},
  onSelectFile: () => {},
};

export default DesktopForm;
