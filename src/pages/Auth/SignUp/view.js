import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";
import DesktopForm from "./components/DesktopForm";
import MobileForm from "./components/MobileForm";

function View({
  width,
  username,
  setUsername,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  setCpf,
  submit,
}) {
  return (
    <>
      <Header />
      {width < 1024 ? (
        <MobileForm
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setCpf={setCpf}
          submit={submit}
        />
      ) : (
        <DesktopForm
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setCpf={setCpf}
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
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  setCpf: PropTypes.func,
  submit: PropTypes.func,
};

View.defaultProps = {
  width: window.innerWidth,
  username: "",
  setUsername: () => {},
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  setCpf: () => {},
  submit: () => {},
};

export default View;
