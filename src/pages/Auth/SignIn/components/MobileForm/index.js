import React from "react";
import PropTypes from "prop-types";

import Input from "../../../../../components/Input";

import { Form, Emblem, Button, Recover, SignIn } from "./styles";

function MobileForm({ username, setUsername, password, setPassword, submit }) {
  return (
    <Form>
      <Emblem />
      <Input
        placeholder="usuário"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        marginTop={50}
      />
      <Input
        placeholder="senha"
        marginTop={50}
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
        <SignIn />
      </Button>
      <Button background="#FFD271" color="#000" to="/signUp">
        cadastrar
      </Button>
      <Recover to="/restore">recuperar conta</Recover>
    </Form>
  );
}

MobileForm.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  submit: PropTypes.func,
};

MobileForm.defaultProps = {
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
  submit: () => {},
};

export default MobileForm;
