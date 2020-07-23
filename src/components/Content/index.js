import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Content({ children }) {
  return <Container>{children}</Container>;
}

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Content.defaultProps = {
  children: <></>,
};

export default Content;
