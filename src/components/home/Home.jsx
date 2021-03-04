import {} from "./home.styles";
import { Container, Button } from "../../globalStyles/theme";
import {
  Wrapper,
  Title,
  SubTitle,
  Section,
  Grid,
  Col,
  Select,
  Content,
} from "./home.styles";
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <div style={{ textAlign: "center" }}>
            <Title fontSize="80px" fontMobile="30px">
              Canada Has Never Been So Afoordable
            </Title>
            <SubTitle fontSize="25px" fontMobile="20px">
              Discover Canada, Choose the best programs, guides, hotels, and
              restaurants.
            </SubTitle>
            <Button>Start to explore</Button>
          </div>

          <Grid>
            <Col>
              <Content>
                <Title fontSize="25px" fontMobile="16px">
                  Guides
                </Title>
                <SubTitle fontSize="18px" fontMobile="13px">
                  Travel with confidence with our top rated guides{" "}
                </SubTitle>
                <Select>Select tour</Select>
              </Content>
            </Col>
            <Col>
              <Content>
                <Title fontSize="25px" fontMobile="16px">
                  Programs
                </Title>
                <SubTitle fontSize="18px" fontMobile="13px">
                  Travel with confidence with our top rated guides{" "}
                </SubTitle>
                <Select>Select tour</Select>
              </Content>
            </Col>
            <Col>
              <Content>
                <Title fontSize="25px" fontMobile="16px">
                  Hotels
                </Title>
                <SubTitle fontSize="18px" fontMobile="13px">
                  Travel with confidence with our top rated guides{" "}
                </SubTitle>
                <Select>Select tour</Select>
              </Content>
            </Col>
          </Grid>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Home;
