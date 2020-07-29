import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";
import DesktopForm from "./components/DesktopForm";
import MobileForm from "./components/MobileForm";

function View({ width, username, setUsername, password, setPassword, submit }) {
  return (
    <>
      <Header />
      {width < 1024 ? (
        <MobileForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          submit={submit}
        />
      ) : (
        <DesktopForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          submit={submit}
        />
      )}
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  submit: PropTypes.func,
};

View.defaultProps = {
  width: window.innerWidth,
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
  submit: () => {},
};

export default View;
