import styled from "styled-components";

export const Container = styled.div`
  min-height: 550px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export const Nav = styled.button`
  width: 140px;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-left: 20px;
  }

  @media (min-width: 824px) {
    width: 200px;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  color: #000;
  height: 32px;
  border-bottom: ${(props) => (props.selected ? 5 : 0)}px solid #000;
  transition: border-bottom 200ms linear;

  @media (min-width: 824px) {
    font-size: 24px;
  }
`;
