import React from "react";

import Input from "../../../../../components/Input";

import {
  Container,
  Background,
  Opacity,
  Content,
  Column,
  Label,
  SignUp,
  Form,
  Emblem,
  Button,
  SignIn,
  Recover,
} from "./styles";

function DesktopForm() {
  return (
    <Container>
      <Content>
        <Column>
          <Label>A melhor do sul do estado</Label>
          <SignUp to="/signUp">cadastrar</SignUp>
        </Column>
        <Column>
          <Form>
            <Emblem />
            <Input placeholder="usuário" marginTop={100} />
            <Input placeholder="senha" marginTop={30} type="password" />
            <Button>
              <SignIn />
            </Button>
            <Recover to="/restore">
              <p style={{ color: "#fff" }}>recuperar conta</p>
            </Recover>
          </Form>
        </Column>
      </Content>
      <Background />
      <Opacity />
    </Container>
  );
}

export default DesktopForm;
