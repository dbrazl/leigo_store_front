import styled from "styled-components";
import InputMask from "react-input-mask";
import { FiSave } from "react-icons/fi";
import background from "../../../../../assets/images/login-bg.png";
import emblem from "../../../../../assets/images/emblem.png";

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

export const Emblem = styled.img.attrs({
  src: emblem,
})`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -75px;
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  position: relative;
  width: 500px;
  height: 600px;
`;

export const CPF = styled(InputMask).attrs({
  mask: "999.999.999-99",
})`
  width: 400px;
  border-bottom: 1px solid #000;
  height: 45px;
  text-align: center;
  margin-top: 30px;
  font-size: 24px;
`;

export const Label = styled.p`
  font-size: 64px;
  color: #fff;
  text-align: left;
  z-index: 1;
  width: 448px;
  margin-left: 50px;
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#000")};
  background: ${(props) => (props.background ? props.background : "#fff")};
  font-size: 24px;
  z-index: 1;
  border-radius: 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
`;

export const Save = styled(FiSave)`
  width: 32px;
  height: 32px;
  color: #fff;
`;
