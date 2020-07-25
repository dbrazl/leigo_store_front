import styled from "styled-components";
import { FiUploadCloud } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 620px) {
    height: ${window.innerHeight}px;
  }
`;

export const WrapperPhoto = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  margin-top: 150px;

  @media (min-width: 620px) {
    margin-top: 0;
  }
`;

export const File = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #eee;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  background: ${(props) => (props.background ? props.background : "#424242")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  clear: #000;
  font-size: 24px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

export const Cloud = styled(FiUploadCloud)`
  width: 32px;
  height: 32px;
  color: #fff;
`;
