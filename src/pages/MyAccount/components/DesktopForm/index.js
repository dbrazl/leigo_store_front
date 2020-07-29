import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

import photo from "~/assets/images/photo.png";

import {
  Container,
  Column,
  Form,
  Photo,
  File,
  Input,
  Button,
  Cloud,
  Title,
  Card,
  ProductPhoto,
  Description,
  Request,
  WrapperQuantity,
  Quantity,
  SmallLabel,
  Info,
  Buy,
  Total,
  List,
  Scroll,
  Logout,
} from "./styles";

function DesktopForm({
  openInput,
  onSelectFile,
  username,
  setUsername,
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
  logout,
  update,
  avatar,
  payaments,
  products,
}) {
  function renderRequest(request) {
    const total = request.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <Card>
        <ProductPhoto src={request.lastSellImage} />
        <Description>
          <Request>{`Pedido #${request.id}`}</Request>
          <WrapperQuantity>
            <Quantity>{request.quantity}</Quantity>
            <SmallLabel>items</SmallLabel>
          </WrapperQuantity>
        </Description>
        <Info>
          <Buy>{format(new Date(request.created_at), "dd/MM/yyyy")}</Buy>
          <Total>{total}</Total>
        </Info>
      </Card>
    );
  }

  return (
    <Container>
      <Column>
        <Form>
          <Photo src={avatar || photo} onClick={openInput} />
          <File
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            onChange={onSelectFile}
          />
          <Input
            placeholder="nome do usuário"
            value={name}
            onChange={(event) => setName(event.target.value)}
            marginTop={50}
          />
          <Input
            placeholder="usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            marginTop={50}
          />
          <Input
            placeholder="e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            marginTop={50}
          />
          <Input
            placeholder="senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            marginTop={50}
          />
          <Button
            onClick={(event) => {
              event.preventDefault();
              update();
            }}
          >
            <Cloud />
          </Button>
          <Logout onClick={logout}>Sair</Logout>
        </Form>
      </Column>
      <Column justify="flex-start">
        <Title>Últimos pedidos</Title>
        <List>
          {" "}
          <Scroll>{payaments.map((request) => renderRequest(request))}</Scroll>
        </List>
      </Column>
    </Container>
  );
}

DesktopForm.propTypes = {
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
  logout: PropTypes.func,
  update: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  avatar: PropTypes.string,
  payaments: PropTypes.array,
  products: PropTypes.array,
};

DesktopForm.defaultProps = {
  openInput: () => {},
  onSelectFile: () => {},
  logout: () => {},
  update: () => {},
  username: "",
  setUsername: () => {},
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  avatar: "",
  payaments: [],
  products: [],
};

export default DesktopForm;
