import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import atletica from "../../../../../assets/images/emblem.png";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Emblem = styled.img.attrs({
  src: atletica,
})`
  width: 150px;
  object-fit: contain;
  margin-top: 80px;

  @media (min-width: 620px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 150px;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "#424242")};
  color: ${(props) => (props.color ? props.color : "#fff")}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-top: 50px;

  & + & {
    margin-top: 30px;
  }
`;

export const SignIn = styled(FiLogIn)`
  height: 32px;
  width: 32px;
  color: #fff;
`;

export const Recover = styled(Link)`
  font-size: 24px;
  color: #000;
  text-decoration: none;
  margin-top: 30px;
  margin-bottom: 30px;
`;
