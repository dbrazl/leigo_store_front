import styled from "styled-components";
import background from "../../../../../assets/images/login-bg.png";
import emblem from "../../../../../assets/images/emblem.png";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.img.attrs({
  src: background,
})`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Opacity = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 64px;
  margin-right: 20px;
  text-align: right;
  color: #fff;
  width: 448px;
`;

export const SignUp = styled(Link)`
  height: 45px;
  width: 200px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  margin-top: 50px;
  margin-right: 20px;
  text-decoration: none;
`;

export const Form = styled.form`
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const Emblem = styled.img.attrs({
  src: emblem,
})`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -100px;
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #424242;
  margin-top: 50px;
`;

export const SignIn = styled(FiLogIn)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Recover = styled(Link)`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -70px;
  text-orientation: none;
`;
