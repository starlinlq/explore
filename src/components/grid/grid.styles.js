import styled from "styled-components";
export const Cards = styled.div``;
export const Card = styled.div`
  border-radius: 7px;

  /* margin: 0 0.5rem 1rem 0; */
  margin: auto;

  width: 365px;
  height: ${({ height }) => height};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 800px) {
    width: 340px;
  }
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;
export const Title = styled.h1``;
export const Price = styled.span``;
export const Time = styled.span``;
export const Guide = styled.p``;
export const Type = styled.span``;
