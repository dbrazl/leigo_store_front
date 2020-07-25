import React from "react";

import Input from "../../../../../components/Input";
import { Form, Emblem, CPF, Button, Save, Back } from "./styles";

function View() {
  return (
    <Form>
      <Emblem />
      <Input placeholder="usuário" marginTop={30} />
      <Input placeholder="nome" marginTop={30} />
      <Input placeholder="senha" marginTop={30} type="password" />
      <Input placeholder="e-mail" marginTop={30} />
      <CPF placeholder="CPF" />
      <Button>
        <Save />
      </Button>
      <Back to="/signIn">voltar</Back>
    </Form>
  );
}

export default View;
