import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";

import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

import { ModalContainer, Modal, Message, Ilustration, Button } from "./styles";

function View({ width }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header />
      {width < 1024 ? <MobileForm /> : <DesktopForm />}
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
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
};

View.defaultProps = {
  width: window.innerWidth,
};

export default View;
