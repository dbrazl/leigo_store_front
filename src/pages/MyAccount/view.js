import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import MobileForm from "./components/MobileForm";
import DesktopForm from "./components/DesktopForm";

function View({
  width,
  openInput,
  onSelectFile,
  logout,
  update,
  username,
  setUsername,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  avatar,
  payaments,
  products,
}) {
  return (
    <>
      <Header />
      {width < 1200 ? (
        <MobileForm
          openInput={openInput}
          onSelectFile={onSelectFile}
          logout={logout}
          update={update}
          username={username}
          setUsername={setUsername}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          avatar={avatar}
        />
      ) : (
        <DesktopForm
          openInput={openInput}
          onSelectFile={onSelectFile}
          logout={logout}
          update={update}
          username={username}
          setUsername={setUsername}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          avatar={avatar}
          payaments={payaments}
          products={products}
        />
      )}
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
  openInput: PropTypes.func,
  onSelectFile: PropTypes.func,
  logout: PropTypes.func,
  update: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  avatar: PropTypes.string,
  payaments: PropTypes.array,
  products: PropTypes.array,
};

View.defaultProps = {
  width: window.innerWidth,
  openInput: () => {},
  onSelectFile: () => {},
  logout: () => {},
  update: () => {},
  username: "",
  setUsername: () => {},
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  avatar: "",
  payaments: [],
  products: [],
};

export default View;
