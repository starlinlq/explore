import {} from "./home.styles";
import { Container, Button } from "../../globalStyles/theme";
import { Wrapper, Title, SubTitle, Section } from "./home.styles";
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Title>Canada Has Never Been So Afoordable</Title>
          <SubTitle>
            Discover Canada, Choose the best programs, guides, hotels, and
            restaurants.
          </SubTitle>
          <Button>Start to explore</Button>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Home;
