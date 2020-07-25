import styled from "styled-components";
import emblem from "../../../../../assets/images/emblem.png";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: ${window.innerHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Emblem = styled.img.attrs({
  src: emblem,
})`
  width: 150px;
  object-fit: contain;

  @media (min-width: 620px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  background: #424242;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Recover = styled(FiRefreshCw)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Back = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  margin-top: 30px;
`;
