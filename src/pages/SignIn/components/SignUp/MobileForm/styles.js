import styled from "styled-components";
import emblem from "../../../../../assets/images/emblem.png";
import InputMask from "react-input-mask";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Form = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Emblem = styled.img.attrs({
  src: emblem,
})`
  width: 150px;
  height: 150px;

  @media (min-width: 824px) {
    margin-top: 100px;
  }
`;

export const CPF = styled(InputMask).attrs({
  mask: "000.000.000-00",
})`
  width: 200px;
  color: #000;
  border-bottom: 1px solid #000;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;

  @media (min-width: 420px) {
    width: 300px;
  }

  @media (min-width: 620px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  width: 150px;
  min-height: 45px;
  max-height: 45px;
  background: #424242;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Back = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Save = styled(FiSave)`
  width: 32px;
  height: 32px;
  color: #fff;
`;
