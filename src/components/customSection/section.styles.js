import styled from "styled-components";

export const Title = styled.h1`
  width: 600px;
  margin: auto;
  font-size: 3rem;
  margin-bottom: 20px;
`;
export const SubTitle = styled.p`
  color: lightgray;
  padding-bottom: 3.5em;
  width: 500px;
  margin: auto;
`;

export const Wrapper = styled.div`
  color: white;
  text-align: center;
  @media screen and (max-width: 700px) {
    ${Title} {
      width: 350px;
      font-size: 2.5rem;
    }

    ${SubTitle} {
      width: 350px;
    }
  }
`;
