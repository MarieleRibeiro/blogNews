import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.white100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  max-width: 1222px;
  width: 100%;
  border-radius: 20px;
  padding: 90px 117px;
  min-height: 942px;

  @media (max-width: 900px) {
    padding: 90px 30px;
  }
`;
export const Content = styled.div``;

export const NewsContainer = styled.main`
  display: flex;
  width: 100%;
  margin-top: 30px;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  @media (max-width: 1114px) {
    flex-direction: column;
  }
`;
