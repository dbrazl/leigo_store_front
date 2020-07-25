import React from "react";
import PropTypes from "prop-types";

import Input from "../../../../components/Input";

import { Container, WrapperPhoto, File, Photo, Button, Cloud } from "./styles";

function View({ openInput, onSelectFile }) {
  return (
    <Container>
      <WrapperPhoto>
        <File
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={onSelectFile}
        />
        <Photo onClick={openInput} />
      </WrapperPhoto>
      <Input placeholder="nome do usuário" marginTop={50} />
      <Input placeholder="usuário" marginTop={30} />
      <Input placeholder="e-mail" marginTop={30} />
      <Input placeholder="senha" marginTop={30} />
      <Button marginTop={100}>
        <Cloud />
      </Button>
      <Button marginTop={50} background="#fff" marginBottom={50}>
        Sair
      </Button>
    </Container>
  );
}

View.propTypes = {
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
};

View.defaultProps = {
  openInput: () => {},
  onSelectFile: () => {},
};

export default View;
