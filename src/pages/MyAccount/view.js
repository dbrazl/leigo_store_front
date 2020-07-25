import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

function View({ width, openInput, onSelectFile }) {
  console.log(width);
  return (
    <>
      <Header />
      {width < 1200 ? (
        <MobileForm openInput={openInput} onSelectFile={onSelectFile} />
      ) : (
        <DesktopForm openInput={openInput} onSelectFile={onSelectFile} />
      )}
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
};

View.defaultProps = {
  width: window.innerWidth,
  openInput: () => {},
  onSelectFile: () => {},
};

export default View;
