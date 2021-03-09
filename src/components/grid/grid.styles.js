import styled from "styled-components";
export const Cards = styled.div``;
export const Card = styled.div`
  border-radius: 7px;
  color: white;

  /* margin: 0 0.5rem 1rem 0; */
  margin: auto;
  width: 365px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: ${({ height }) => height};
  transition: 1s;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 800px) {
    width: 340px;
  }
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;
export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
`;
export const Time = styled(Price)`
  padding-left: 2rem;
`;
export const Guide = styled.p``;
export const Type = styled.span``;
export const Content = styled.div`
  position: relative;
  padding: 10px;
  padding-left: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  color: white;
`;

export const Icon = styled.div`
  margin-right: 5px;
`;
