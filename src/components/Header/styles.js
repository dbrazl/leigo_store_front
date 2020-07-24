import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #ffbb29;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
`;

export const User = styled(FiUser)`
  width: 32px;
  height: 32px;
  color: #000;
`;

export const Cart = styled(FiShoppingCart)`
  width: 32px;
  height: 32px;
  color: #000;
`;

export const Label = styled.p`
  margin-left: 10px;
  font-size: 18px;
`;

export const Badge = styled.p`
  padding: 5px 10px;
  border-radius: 10px;
  background: #424242;
  color: #fff;
  font-size: 18px;
`;

export const Modal = styled.div`
  height: 100%;
  width: 320px;
  background: #424242;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 60%;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Menu = styled(FiMenu)`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 2;
  color: ${(props) => (props.modal ? "#ffbb29" : "#424242")};
`;

export const ModalList = styled.div`
  position: absolute;
  top: 150px;
  left: 0px;
  background: red;
  width: 93%;

  @media (min-width: 500px) {
    width: 94%;
  }
`;

export const Tab = styled(Link)`
  height: 45px;
  width: 100%;
  padding: auto 0px;
  padding-left: 20px;
  color: #fff;
  z-index: 3;
  background: ${(props) => (props.selected ? "#222222" : "#424242")};
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
