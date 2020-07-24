import React from "react";
import PropTypes from "prop-types";

import { TextInput } from "./styles";

function Input({ placeholder, value, onChange, type, marginTop }) {
  return (
    <TextInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      marginTop={marginTop}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  marginTop: PropTypes.number,
};

Input.defaulProps = {
  placeholder: "campo",
  value: "",
  onChange: () => {},
  type: "text",
  marginTop: 0,
};

export default Input;
