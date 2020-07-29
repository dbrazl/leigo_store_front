import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  height: ${window.innerHeight}px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Painel = styled.div`
  height: 85px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;

  @media (min-width: 824px) {
    position: fixed;
    top: 80px;
    height: 130px;
  }
`;

export const PainelItems = styled.div`
  width: 824px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 824px) {
    justify-content: flex-end;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const Button = styled(Link)`
  padding: 5px 10px;
  border-radius: 10px;
  background: transparent;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2.5px;
  border: 1px solid #000;
  text-decoration: none;

  @media (min-width: 824px) {
    letter-spacing: 5px;
    margin-right: 100px;
  }
`;

export const Info = styled.div`
  margin-top: 150px;
`;

export const Baseline = styled.div`
  display: flex;
  align-items: ${(props) => props.justify};
  justify-content: center;
  flex-direction: ${(props) =>
    props.justify !== "baseline" ? "column" : "row"};
  margin-bottom: 30px;

  @media (min-width: 824px) {
    margin-bottom: 0;

    & + & {
      margin-left: 50px;
    }
  }
`;

export const Quantity = styled.p`
  font-size: 32px;
  color: #ffd271;
  margin-right: 10px;
  font-weight: bold;

  @media (min-width: 620px) {
    font-size: 45px;
  }
`;

export const Total = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;

  @media (min-width: 620px) {
    font-size: 45px;
  }

  @media (min-width: 824px) {
    margin-right: 30px;
  }
`;

export const Label = styled.p`
  font-size: 18px;

  @media (min-width: 620px) {
    font-size: 18px;
  }
`;
