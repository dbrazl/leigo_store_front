import styled from "styled-components";
import ilustration from "../../../assets/images/recover-ilustration.png";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const Modal = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 620px) {
    width: 600px;
    height: 500px;
  }
`;

export const Ilustration = styled.img.attrs({
  src: ilustration,
})`
  width: 200px;
  object-fit: contain;

  @media (min-width: 620px) {
    width: 450px;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  color: #000;
  margin-top: 30px;
  text-align: center;
  padding: 0 20px;

  @media (min-width: 620px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 150px;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;

  @media (min-width: 620px) {
    width: 200px;
  }
`;
