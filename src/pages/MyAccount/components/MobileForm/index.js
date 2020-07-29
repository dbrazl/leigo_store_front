import React from "react";
import PropTypes from "prop-types";

import photo from "~/assets/images/photo.png";
import Input from "../../../../components/Input";

import { Container, WrapperPhoto, File, Photo, Button, Cloud } from "./styles";

function View({
  openInput,
  onSelectFile,
  name,
  setName,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  logout,
  update,
  avatar,
}) {
  return (
    <Container>
      <WrapperPhoto>
        <File
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={onSelectFile}
        />
        <Photo src={avatar || photo} onClick={openInput} />
      </WrapperPhoto>
      <Input
        placeholder="nome do usuário"
        value={name}
        onCHange={(event) => setName(event.target.value)}
        marginTop={50}
      />
      <Input
        placeholder="usuário"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        marginTop={30}
      />
      <Input
        placeholder="e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        marginTop={30}
      />
      <Input
        placeholder="senha"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        marginTop={30}
      />
      <Button
        marginTop={100}
        onClick={(event) => {
          event.preventDefault();
          update();
        }}
      >
        <Cloud />
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault();
          logout();
        }}
        marginTop={50}
        background="#fff"
        marginBottom={50}
      >
        Sair
      </Button>
    </Container>
  );
}

View.propTypes = {
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
  logout: PropTypes.bool,
  name: PropTypes.string,
  setName: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  update: PropTypes.func,
  avatar: PropTypes.string,
};

View.defaultProps = {
  openInput: () => {},
  onSelectFile: () => {},
  logout: () => {},
  name: "",
  setName: () => {},
  username: "",
  setUsername: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  update: () => {},
  avatar: "",
};

export default View;
