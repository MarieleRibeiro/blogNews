import styled from "styled-components";

export const Container = styled.aside`
  margin-left: 25px;
  max-width: 302px;
  width: 100%;
  border-radius: 10px;
  height: 443px;
  background: ${(props) => props.theme.colors.blue};
  padding: 50px;
  box-shadow: 0px 24px 15px -20px rgba(9, 22, 89, 0.503865);
  h4 {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 15px;
    font-weight: bold;
  }
  p {
    color: ${(props) => props.theme.colors.white};
  }

  button {
    margin-top: 50px;
    padding: 13px 32px;
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;
    background: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border-radius: 5px;
  }

  @media (max-width: 1114px) {
    margin-left: 0;
    margin-top: 50px;
    max-width: unset;
  }
`;
