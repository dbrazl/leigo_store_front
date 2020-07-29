import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";

import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

import { ModalContainer, Modal, Message, Ilustration, Button } from "./styles";

function View({ width, username, setUsername, modal, setModal, submit }) {
  return (
    <>
      <Header />
      {width < 1024 ? (
        <MobileForm
          username={username}
          setUsername={setUsername}
          submit={submit}
        />
      ) : (
        <DesktopForm
          username={username}
          setUsername={setUsername}
          submit={submit}
        />
      )}
      {modal && (
        <ModalContainer>
          <Modal>
            <Ilustration />
            <Message>Uma nova senha foi enviada a seu e-mail!</Message>
            <Button
              marginTop={30}
              background="#424242"
              color="#fff"
              onClick={() => setModal(false)}
            >
              fechar
            </Button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  submit: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};

View.defaultProps = {
  width: window.innerWidth,
  username: "",
  setUsername: () => {},
  submit: () => {},
  modal: false,
  setModal: () => {},
};

export default View;
