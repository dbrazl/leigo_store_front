import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Content from "../Content";

import {
  Container,
  Logo,
  Wrapper,
  Nav,
  Button,
  Cart,
  User,
  Label,
  Badge,
  Menu,
  ModalContainer,
  Modal,
  ModalList,
  Tab,
  Back,
} from "./styles";

function Header({ width }) {
  const products = useSelector((state) => state.cart.products);
  const [number, setNumber] = useState(0);
  const [widthState, setWidthState] = useState(window.innerWidth);
  const [modal, setModal] = useState(false);
  const [timeout, setTimeout] = useState(null);
  const routeSelected = useSelector((state) => state.route.route);

  const routes = [
    {
      name: "Principal",
      path: "/",
    },
    {
      name: "Carrinho",
      path: "/cart",
    },
    {
      name: "Login",
      path: "/login",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  function resizeEvent(event) {
    const { innerWidth } = event.target;
    setWidthState(innerWidth);
  }

  useEffect(() => {
    let amount = 0;

    products.forEach((product) => {
      amount += product.amount;
    });

    setNumber(amount);
  }, [products]);

  function renderDesktopHeader() {
    return (
      <Container>
        <Content>
          <Wrapper>
            <Back to="/">
              <Logo />
            </Back>
            <Nav>
              {number > 0 && <Badge>{number}</Badge>}
              <Button>
                <Cart />
                <Label>carrinho</Label>
              </Button>
              <Button>
                <User />
                <Label>login</Label>
              </Button>
            </Nav>
          </Wrapper>
        </Content>
      </Container>
    );
  }

  function onClickMenuMobile() {
    if (modal) {
      const timeout = setTimeout(() => {
        setModal(false);
      }, 500);

      setTimeout(timeout);
    } else {
      setModal(true);
    }
  }

  function renderTabs(route) {
    const key = route.name;

    if (route.name === routeSelected)
      return (
        <Tab selected key={key} to={route.path}>
          <p style={{ color: "#fff" }}>{route.name}</p>
        </Tab>
      );
    else
      return (
        <Tab key={key} to={route.path}>
          {" "}
          <p style={{ color: "#afafaf" }}>{route.name}</p>
        </Tab>
      );
  }

  function renderMobileHeader() {
    return (
      <>
        <Menu onClick={onClickMenuMobile} modal={modal} />
        {modal && (
          <ModalContainer onClick={onClickMenuMobile}>
            <Modal>
              <ModalList>{routes.map((route) => renderTabs(route))}</ModalList>
            </Modal>
          </ModalContainer>
        )}
      </>
    );
  }

  return <>{widthState > 824 ? renderDesktopHeader() : renderMobileHeader()}</>;
}

Header.propTypes = {
  width: PropTypes.number,
};

Header.defaultProps = {
  width: window.innerWidth,
};

export default Header;
