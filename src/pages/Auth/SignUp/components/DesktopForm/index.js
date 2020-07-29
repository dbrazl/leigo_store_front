import React from "react";
import PropTypes from "prop-types";

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

function Index({
  username,
  setUsername,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  setCpf,
  submit,
}) {
  return (
    <Container>
      <Background />
      <Opacity />
      <Column>
        <Form>
          <Emblem />
          <Input
            placeholder="usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            marginTop={30}
          />
          <Input
            placeholder="nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            marginTop={30}
          />
          <Input
            placeholder="senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            marginTop={30}
            type="password"
          />
          <Input
            placeholder="e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            marginTop={30}
          />
          <CPF
            placeholder="CPF"
            onChange={(event) => setCpf(event.target.value)}
          />
          <Button background="#424242" onClick={submit} marginTop={50}>
            <Save />
          </Button>
        </Form>
      </Column>
      <Column>
        <Label>Seja bem-vindo ao inferno</Label>
        <Button marginTop={30} marginLeft={50} to="/signIn">
          voltar
        </Button>
      </Column>
    </Container>
  );
}

Index.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setCpf: PropTypes.func,
  submit: PropTypes.func,
};

Index.defaultProps = {
  username: "",
  setUsername: () => {},
  name: "",
  setName: () => {},
  password: "",
  setPassword: () => {},
  enail: "",
  setEmail: () => {},
  setCpf: () => {},
  submit: () => {},
};

export default Index;
