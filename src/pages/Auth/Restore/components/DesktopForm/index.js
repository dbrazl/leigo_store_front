import React from "react";

import Input from "../../../../../components/Input";

import {
  Container,
  Background,
  Opacity,
  Content,
  Column,
  Label,
  Button,
  Form,
  Emblem,
  Recover,
} from "./styles";

function Index() {
  return (
    <Container>
      <Content>
        <Column>
          <Label>Somos leigos lá da federal!</Label>
          <Button marginTop={30}>voltar</Button>
        </Column>
        <Column>
          <Form>
            <Emblem />
            <Input placeholder="usuário" marginTop={120} />
            <Button background="#424242" marginTop={100}>
              <Recover />
            </Button>
          </Form>
        </Column>
      </Content>
      <Background />
      <Opacity />
    </Container>
  );
}

export default Index;
