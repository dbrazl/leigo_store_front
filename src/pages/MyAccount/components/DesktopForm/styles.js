import styled from "styled-components";
import { FiUploadCloud } from "react-icons/fi";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  height: ${window.innerHeight}px;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  flex-direction: column;
  min-height: 700px;
`;

export const File = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const Form = styled.div`
  width: 450px;
  height: 550px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #eee;
  border-radius: 20px;
  margin-right: 50px;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #c5c5c5;
  position: absolute;
  top: -75px;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  color: #000;
  text-align: center;
  font-size: 24px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;

  &::placeholder {
    color: #000;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -22.5px;
  background: #424242;
  border-radius: 10px;
`;

export const Cloud = styled(FiUploadCloud)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const Title = styled.h2`
  font-weight: unset;
  font-size: 24px;
`;

export const List = styled.div`
  height: 550px;
  margin-top: 50px;
`;

export const Scroll = styled(PerfectScrollBar)``;

export const Card = styled.div`
  width: 600px;
  height: 150px;
  border-radius: 10px;
  background: #eee;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 30px;
  }
`;

export const ProductPhoto = styled.img`
  width: 100px;
  height: 100px;
  background: #c5c5c5;
  border-radius: 10px;
  margin-left: 25px;
`;

export const Description = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;

export const Request = styled.p`
  font-size: 24px;
  color: #000;
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const WrapperQuantity = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Quantity = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const SmallLabel = styled.p`
  font-size: 18px;
  margin-left: 10px;
`;

export const Info = styled.div`
  height: 100px;
  width: 180px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
`;

export const Date = styled.p`
  font-size: 18px;
  letter-spacing: 2.5px;
  color: #000;
`;

export const Total = styled.p`
  font-size: 32px;
  font-weight: bold;
`;
