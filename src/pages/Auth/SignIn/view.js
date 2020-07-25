import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";
import DesktopForm from "./components/DesktopForm";
import MobileForm from "./components/MobileForm";

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
