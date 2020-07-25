import styled from "styled-components";
import background from "../../../../../assets/images/login-bg.png";
import emblem from "../../../../../assets/images/emblem.png";
import { FiRefreshCw } from "react-icons/fi";

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
  z-index: 1;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 64px;
  color: #fff;
  width: 365px;
  text-align: right;
`;

export const Button = styled.button`
  height: 45px;
  width: 200px;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;

export const Form = styled.form`
  width: 500px;
  height: 400px;
  border-radius: 20px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
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

export const Recover = styled(FiRefreshCw)`
  width: 32px;
  height: 32px;
  color: #fff;
`;
