import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`


body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
}
a:link{
  text-decoration: none!important;
  cursor: pointer;
}


`;

export const theme = {
  primaryFontColor: "white",
  secondaryFontColor: "#c8bdd4",
  buttonColor: "#191e37",
};

export const Container = styled.div`
  width: 1140px;
  margin: auto;

  @media screen and (max-width: 992px) {
    width: 960px;
  }
  @media screen and (max-width: 768px) {
    width: 720px;
  }
  @media screen and (max-width: 576px) {
    width: 540px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #f93737;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 50px;
  color: ${({ theme }) => theme.primaryFontColor};
  padding: 0 45px;
  font-weight: 500;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: #191e37;
  }
`;
