import React from "react";

import Input from "../../../../../components/Input";

import {
  Container,
  Background,
  Opacity,
  Emblem,
  Column,
  Form,
  Label,
  Button,
  CPF,
  Save,
} from "./styles";

function Index() {
  return (
    <Container>
      <Background />
      <Opacity />
      <Column>
        <Form>
          <Emblem />
          <Input placeholder="usuário" marginTop={30} />
          <Input placeholder="nome" marginTop={30} />
          <Input placeholder="senha" marginTop={30} type="password" />
          <Input placeholder="e-mail" marginTop={30} />
          <CPF placeholder="CPF" />
          <Button background="#424242" marginTop={50}>
            <Save />
          </Button>
        </Form>
      </Column>
      <Column>
        <Label>Seja bem-vindo ao inferno</Label>
        <Button marginTop={30} marginLeft={50}>
          cancelar
        </Button>
      </Column>
    </Container>
  );
}

export default Index;
