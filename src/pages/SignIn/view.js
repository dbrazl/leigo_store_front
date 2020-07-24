import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";

import SignInMobileForm from "./components/SignIn/MobileForm";
import SignInDesktopForm from "./components/SignIn/DesktopForm";
import SignUpMobileForm from "./components/SignUp/MobileForm";
import SignUpDesktopForm from "./components/SignUp/DesktopForm";

import { Container } from "./styles";

function View({ width }) {
  return (
    <Container>
      <Header />
      {/* {width < 1024 ? <SignInMobileForm /> : <SignInDesktopForm />} */}
      {width < 1024 ? <SignUpMobileForm /> : <SignUpDesktopForm />}
    </Container>
  );
}

View.propTypes = {
  width: PropTypes.number,
};

View.defaultProps = {
  width: window.innerWidth,
};

export default View;
