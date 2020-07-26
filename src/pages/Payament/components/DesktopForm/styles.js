import styled from "styled-components";
import InputMask from "react-input-mask";
import { FiCreditCard, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";
import flag from "../../../../assets/images/card/flag.png";
import emblem from "../../../../assets/images/emblem.png";

export const Container = styled.section.attrs({
  name: "payament",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${window.innerHeight - 500}px;
`;

export const Column = styled.div``;

export const FlipCard = styled.div`
  width: 450px;
  height: 263px;
  margin-right: 50px;
  perspective: 1000px;
  background-color: transparent;

  transform: rotateY(${(props) => (props.rotate ? 180 : 0)}deg);
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  transform: rotateY(${(props) => (props.rotate ? 180 : 0)}deg);
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  border-radius: 20px;
  background: #424242;
  display: flex;
`;

export const Flag = styled.img.attrs({
  src: flag,
})`
  width: 100px;
  object-fit: contain;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const NameCard = styled.p`
  font-size: 24px;
  color: #fff;
  font-family: "Roboto";
  position: absolute;
  bottom: 30px;
  left: 30px;
  text-align: left;
  width: 280px;
`;

export const WrapperDate = styled.div`
  position: absolute;
  bottom: 65px;
  right: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ValidDate = styled.p`
  font-family: "OcrA";
  font-size: 16px;
  color: #fff;
`;

export const CardNumber = styled.p`
  font-size: 28px;
  font-family: "OcrA";
  color: #fff;
  position: absolute;
  width: 400px;
  top: 120px;
  left: 0px;
`;

export const Emblem = styled.img.attrs({
  src: emblem,
})`
  position: absolute;
  top: 20px;
  left: 190px;
  height: 80px;
  object-fit: contain;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  border-radius: 20px;
  background: #424242;
  position: relative;
`;

export const Bar = styled.div`
  width: 100%;
  position: absolute;
  top: 50px;
  height: 70px;
  background: #c5c5c5;
`;

export const CVV = styled.p`
  position: absolute;
  top: 150px;
  right: 50px;
  background: #525252;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 24px;
  letter-spacing: 2.5px;
  transform: scale(-1, 1);
`;

export const Form = styled.div`
  width: 400px;
  height: 346px;
  background: #eee;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;

export const SmallLabel = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-bottom: 10px;
`;

export const CardInput = styled(InputMask).attrs({
  mask: "9999 9999 9999 9999",
})`
  font-family: "OcrA";
  font-size: 24px;
`;

export const Row = styled.div`
  width: 300px;
  display: flex;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;

export const CVVInput = styled(InputMask).attrs({
  mask: "999",
})`
  font-size: 24px;
  width: 100px;
`;

export const DateInput = styled(InputMask).attrs({
  mask: "99/9999",
})`
  font-size: 24px;
  width: 100px;
`;

export const Input = styled.input`
  font-size: 24px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;

  &:focus {
    &::placeholder {
      color: #000;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 50px;
`;

export const Quantity = styled.p`
  font-size: 45px;
  color: #ffd271;
  font-weight: bold;
  margin-right: 10px;
`;

export const Sell = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Total = styled.p`
  font-size: 45px;
  color: #000;
  font-weight: bold;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
`;

export const Buttons = styled.div`
  flex-direction: row;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 150px;
  height: 55px;
  background: #424242;
  border-radius: 10px;
`;

export const CreditCard = styled(FiCreditCard)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Back = styled(Link)`
  font-size: 24px;
  margin-right: 50px;
  text-decoration: none;
`;

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${window.innerHeight - 400}px;

  @media (min-width: 824px) {
    height: ${window.innerHeight - 500}px;
  }
`;

export const Dolar = styled(FiDollarSign)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Baseline = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;
