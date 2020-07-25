import React from "react";

import Input from "../../../../../components/Input";

import { Form, Emblem, Button, Recover, SignIn } from "./styles";

function MobileForm() {
  return (
    <Form>
      <Emblem />
      <Input placeholder="usuário" marginTop={50} />
      <Input placeholder="senha" marginTop={50} type="password" />
      <Button>
        <SignIn />
      </Button>
      <Button background="#FFD271" color="#000" to="/signUp">
        cadastrar
      </Button>
      <Recover to="/restore">recuperar conta</Recover>
    </Form>
  );
}

export default MobileForm;
