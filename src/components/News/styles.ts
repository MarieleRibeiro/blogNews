import styled from "styled-components";

export const NewsContent = styled.div``;

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 27px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const New = styled.li`
  h4 {
    margin-bottom: 15px;
    font-weight: bold;
  }
`;
