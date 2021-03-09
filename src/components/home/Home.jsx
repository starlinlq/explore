import {} from "./home.styles";
import { Container, Button } from "../../globalStyles/theme";
import { CustomSection } from "../";
import {
  Wrapper,
  Title,
  SubTitle,
  Section,
  Row,
  Col,
  Select,
  Content,
} from "./home.styles";
import { Grid, Reviews } from "../";
const Home = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Section>
            <div style={{ textAlign: "center" }}>
              <Title fontSize="80px" fontMobile="30px">
                Exploring Has Never Been So Afoordable
              </Title>
              <SubTitle fontSize="25px" fontMobile="18px">
                Discover Canada, Choose the best programs, guides, hotels, and
                restaurants.
              </SubTitle>
              <Button>Start to explore</Button>
            </div>

            <Row>
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
            </Row>
          </Section>
        </Container>
      </Wrapper>
      <div style={{ minHeight: "100vh" }}>
        <CustomSection
          title="Top Programs"
          subtitle="Our programs are compiled by the best guides, 
                    Each tourist will be able to choose a program according to their level"
        >
          {" "}
          <Grid />
        </CustomSection>
      </div>
      <div style={{ minHeight: "100vh" }}>
        <CustomSection
          title="Emotions are the best you can get in this life"
          subtitle="Check out the reviwes of people who used our services"
        >
          <Reviews />
        </CustomSection>
      </div>
    </>
  );
};

export default Home;
