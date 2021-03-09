import React from "react";
import { Container } from "../../globalStyles/theme";
import Grid from "../grid/Grid";
import { Wrapper, Title, SubTitle } from "./section.styles";

const CustomSection = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Wrapper>
      {children}
    </Container>
  );
};

export default CustomSection;
