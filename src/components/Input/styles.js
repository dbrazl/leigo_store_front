import styled from "styled-components";

export const TextInput = styled.input`
  height: 45px;
  width: 200px;
  border-bottom: 1px solid #000;
  text-align: center;
  background: transparent;
  font-size: 24px;
  margin-top: ${(props) => props.marginTop}px;

  @media (min-width: 420px) {
    width: 300px;
  }

  @media (min-width: 620px) {
    width: 400px;
  }
`;
