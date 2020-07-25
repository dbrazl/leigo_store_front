import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";

import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

function View({ width }) {
  return (
    <>
      <Header />
      {width < 1024 ? <MobileForm /> : <DesktopForm />}
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
