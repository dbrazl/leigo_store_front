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
  SignUp,
  Form,
  Emblem,
  Button,
  SignIn,
  Recover,
} from "./styles";

function DesktopForm({ username, setUsername, password, setPassword, submit }) {
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
            <Input
              placeholder="usuário"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              marginTop={100}
            />
            <Input
              placeholder="senha"
              marginTop={30}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <Button
              onClick={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <SignIn onClick={() => submit()} />
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

DesktopForm.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  submit: PropTypes.func,
};

DesktopForm.defaultProps = {
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
  submit: () => {},
};

export default DesktopForm;
