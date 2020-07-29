import styled from "styled-components";
import { FiTrash, FiPlus, FiMinus, FiFacebook, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const Container = styled.div`
  height: ${window.innerHeight - 80}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  /* background: red; */

  @media (min-width: 824px) {
    padding-top: 0;
  }
`;

export const Board = styled.div`
  width: 200px;
  height: 164px;
  border-radius: 20px;
  background: #ffd271;
  position: relative;
  cursor: pointer;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 824px) {
    margin: auto 0;
    width: 300px;
    height: 230px;
  }
`;

export const Photo = styled.img`
  height: ${(props) => (props.imageSmall ? 200 : 350)}px;
  object-fit: contain;
  position: absolute;
  right: ${(props) => (props.imageSmall ? 0 : -60)}px;
  bottom: ${(props) => (props.imageSmall ? 50 : 0)}px;
  cursor: pointer;

  @media (min-width: 824px) {
    bottom: 0;
    height: ${(props) => (props.imageSmall ? 300 : 450)}px;
    right: ${(props) => (props.imageSmall ? -110 : -50)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 824px) {
    width: 100%;
    padding-left: 20px;
    height: 700px;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 824px) {
    margin-left: 150px;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 30px 0;

  @media (min-width: 420px) {
    left: 60px;
    bottom: 90px;
    width: 300px;
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 30px;
  width: 200px;
  height: 100px;
  color: #808080;
  margin-bottom: 50px;
  word-break: break-word;
  text-align: justify;

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
`;

export const Trash = styled(FiTrash)`
  width: 24px;
  height: 24px;
  margin-left: 50px;
  cursor: pointer;

  @media (min-width: 420px) {
    margin-left: 100px;
  }
`;

export const Plus = styled(FiPlus)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;

export const Minus = styled(FiMinus)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Count = styled.p`
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 24px;
  color: #000;
  background: #eee;
`;

export const Price = styled.p`
  font-size: 24px;
  color: #fff;
  background: #424242;
  padding: 5px 10px;
  position: absolute;
  bottom: -16px;
  border-radius: 10px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;

  @media (min-width: 824px) {
    position: absolute;
    bottom: 0;
    right: 100px
    flex-direction: row;
    align-items: baseline;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  color: #424242;

  @media (min-width: 420px) {
    font-size: 24px;
  }

  @media (min-width: 824px) {
    margin-right: 10px;
  }
`;

export const Value = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #424242;

  @media (min-width: 420px) {
    font-size: 45px;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
  width: 200px;

  @media (min-width: 420px) {
    width: 300px;
  }
`;

export const Tag = styled.p`
  margin-left: 10px;
  font-size: 18px;
  padding: 5px 10px;
  color: #000;
  background: #ffd271;
  border-radius: 5px;

  @media (min-width: 420px) {
    font-size: 24px;
  }
`;

export const Social = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (min-width: 420px) {
    width: 250px;
  }

  @media (min-width: 824px) {
    flex-direction: column;
    height: 200px;
    margin: auto 0;
  }
`;

export const Facebook = styled(FiFacebook)`
  color: #000;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 824px) {
    width: 32px;
    height: 32px;
  }
`;

export const Email = styled(FiMail)`
  color: #000;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 824px) {
    width: 32px;
    height: 32px;
  }
`;

export const Whatsapp = styled(FaWhatsapp)`
  color: #000;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 420px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 824px) {
    width: 32px;
    height: 32px;
  }
`;
