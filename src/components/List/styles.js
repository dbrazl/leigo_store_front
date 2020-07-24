import styled from "styled-components";
import { FiSearch, FiTrash, FiPlus, FiMinus } from "react-icons/fi";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #000;
  margin-right: 20px;
`;

export const Icon = styled(FiSearch)`
  width: 24px;
  height: 24px;
  color: #000;

  @media (min-width: 420px) {
    width: 32px;
    height: 32px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 45px;
  text-align: right;
  padding-right: 10px;
  font-size: 24px;

  @media (min-width: 420px) {
    width: 400px;
  }
`;

export const WrapperMenu = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  top: 100px;
  margin-bottom: 50px;
  z-index: 0;
`;

export const Menu = styled(PerfectScrollbar)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Label = styled.p`
  font-size: 24px;
  color: ${(props) => (props.selected ? "#FFBB29" : "#000")};
  font-weight: ${(props) => (props.selected ? 800 : 400)};
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;

  & + & {
    margin-left: 50px;
  }
`;

export const WrapperList = styled.section`
  flex-wrap: wrap;
  display: row;
  display: flex;
  position: absolute;
  top: ${(props) => props.top}px;
  justify-content: center;
  min-width: 100%;
  min-height: 500px;

  @media (min-width: 420px) {
    top: ${(props) => props.top}px;
  }

  @media (min-width: 824px) {
    justify-content: space-between;
  }
`;

export const Item = styled.div`
  width: 250px;
  height: 400px;
  margin-bottom: 50px;
  margin-top: 50px;

  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 420px) {
    width: 400px;
    height: 500px;
  }
`;

export const Board = styled(Link)`
  width: 200px;
  height: 164px;
  border-radius: 20px;
  background: #ffd271;
  position: absolute;
  bottom: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media (min-width: 420px) {
    width: 280px;
    height: 230px;
  }
`;

export const Photo = styled.img`
  height: ${(props) => (props.imageSmall ? 200 : 350)}px;
  object-fit: contain;
  right: ${(props) => (props.imageSmall ? 0 : -65)}px;
  bottom: ${(props) => (props.imageSmall ? 50 : 0)}px;
  cursor: pointer;
  position: absolute;

  @media (min-width: 420px) {
    bottom: 0;
    height: ${(props) => (props.imageSmall ? 300 : 450)}px;
    right: ${(props) => (props.imageSmall ? -110 : -50)}px;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 100px;
  left: 30px;

  @media (min-width: 420px) {
    left: 60px;
    bottom: 90px;
    width: 300px;
  }
`;

export const Controller = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-right: 25px;
  position: absolute;
  right: 0;
  bottom: 0px;
`;

export const Trash = styled(FiTrash)`
  width: 24px;
  height: 24px;
  margin-left: 50px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 32px;
    height: 32px;
    margin-left: 100px;
  }
`;

export const Plus = styled(FiPlus)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 32px;
    height: 32px;
  }
`;

export const Minus = styled(FiMinus)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 32px;
    height: 32px;
  }
`;

export const Count = styled.p`
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 24px;
  color: #000;
  background: #eee;

  @media (min-width: 420px) {
    font-size: 32px;
  }
`;

export const Price = styled.p`
  padding: 5px 10px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  background: #424242;
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
  bottom: -16px;
`;
