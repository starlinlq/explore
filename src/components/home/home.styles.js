import styled from "styled-components";
import img from "../../images/home.jpg";
export const Wrapper = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const Title = styled.h1`
  font-size: 80px;
  margin: 0;
  padding-top: 7rem;
  color: ${({ theme }) => theme.primaryFontColor};
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.secondaryFontColor};
  font-size: 25px;
`;
export const Section = styled.div`
  text-align: center;
  height: 100vh;
`;
