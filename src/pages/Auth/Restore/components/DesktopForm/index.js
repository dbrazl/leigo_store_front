import React from "react";
import PropTypes from "prop-types";

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

function Index({ username, setUsername, submit }) {
  return (
    <Container>
      <Content>
        <Column>
          <Label>Somos leigos lá da federal!</Label>
          <Button marginTop={30} to="/signIn">
            voltar
          </Button>
        </Column>
        <Column>
          <Form>
            <Emblem />
            <Input
              placeholder="usuário"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              marginTop={120}
            />
            <Button background="#424242" marginTop={100} onClick={submit}>
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

Index.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  submit: PropTypes.func,
};

Index.defaultProps = {
  username: "",
  setUsername: () => {},
  submit: () => {},
};

export default Index;
