import Aside from "../../components/Aside";
import Header from "../../components/Header";
import News from "../../components/News";
import { Container, Wrapper, Content, NewsContainer } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Header />
          <NewsContainer>
            <News />
            <Aside />
          </NewsContainer>
        </Content>
      </Wrapper>
    </Container>
  );
}
