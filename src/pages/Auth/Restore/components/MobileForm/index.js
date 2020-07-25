import React from "react";

import Input from "../../../../../components/Input";
import { Container, Emblem, Button, Recover, Back } from "./styles";

function Index() {
  return (
    <Container>
      <Emblem />
      <Input placeholder="usuário" marginTop={50} />
      <Button>
        <Recover />
      </Button>
      <Back>voltar</Back>
    </Container>
  );
}

export default Index;
