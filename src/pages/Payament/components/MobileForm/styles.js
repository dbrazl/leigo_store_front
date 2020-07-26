import styled from "styled-components";
import InputMask from "react-input-mask";
import { FiCreditCard, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";
import flag from "../../../../assets/images/card/flag.png";

export const FlipCard = styled.div`
  width: 300px;
  height: 175px;
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
  border-radius: 10px;

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

  border-radius: 10px;
  background: #424242;
  display: flex;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  border-radius: 10px;
  background: #424242;
  position: relative;
`;

export const Row = styled.div`
  width: 300px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const InputCVV = styled(InputMask).attrs({
  mask: "999",
})`
  font-size: 24px;
  color: #000;
  width: 100px;
`;

export const Input = styled.input`
  font-size: 24px;
  color: #000;

  &:focus {
    &::placeholder {
      color: #000;
    }
  }
`;

export const SmallLabel = styled.p`
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
`;

export const InputCard = styled(InputMask).attrs({
  mask: "9999 9999 9999 9999",
})`
  font-size: 24px;
  font-family: "OcrA";
  color: #000;
`;

export const InputDate = styled(InputMask).attrs({
  mask: "99/9999",
})`
  font-size: 24px;
  color: #000;
  width: 100px;
`;

export const Button = styled.button`
  width: 150px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #424242;
  margin-top: 50px;
`;

export const CreditCard = styled(FiCreditCard)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Back = styled(Link)`
  font-size: 24px;
  color: #000;
  margin-top: 30px;
  margin-bottom: 50px;
  text-decoration: none;
`;

export const Baseline = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

export const Quantity = styled.p`
  font-size: 32px;
  color: #ffd271;
  font-weight: bold;
  margin-right: 10px;
`;

export const Total = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;

export const Dolar = styled(FiDollarSign)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const Flag = styled.img.attrs({
  src: flag,
})`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  object-fit: contain;
`;

export const Name = styled.p`
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 18px;
  color: #fff;
  width: 200px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Valid = styled.p`
  font-size: 14px;
  font-family: "OcrA";
  color: #fff;
  position: absolute;
  bottom: 60px;
  right: 80px;
`;

export const CardNumber = styled.p`
  font-size: 22px;
  color: #fff;
  font-family: "OcrA";
  text-align: left;
  position: absolute;
  top: 65px;
  left: 20px;
  width: 300px;
`;

export const Bar = styled.div`
  position: absolute;
  top: 30px;
  width: 300px;
  height: 50px;
  background: #c5c5c5;
`;

export const CVV = styled.p`
  position: absolute;
  bottom: 40px;
  right: 20px;
  font-size: 18px;
  letter-spacing: 2.5px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 2.5px;
  background: #525252;
  transform: scale(-1, 1);
`;
