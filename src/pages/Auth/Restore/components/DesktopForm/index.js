import React, { useState } from "react";

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
  ModalContainer,
  Modal,
  Ilustration,
  Message,
} from "./styles";

function Index() {
  const [modal, setModal] = useState(false);

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
        {modal && (
          <ModalContainer>
            <Modal>
              <Ilustration />
              <Message>Uma nova senha foi enviada a seu e-mail!</Message>
              <Button marginTop={30} background="#424242" color="#fff">
                fechar
              </Button>
            </Modal>
          </ModalContainer>
        )}
      </Content>
      <Background />
      <Opacity />
    </Container>
  );
}

export default Index;
