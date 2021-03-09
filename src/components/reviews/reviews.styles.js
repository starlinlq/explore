import styled from "styled-components";
export const Content = styled.div`
  position: relative;
  margin-top: 2.5rem;
  background-image: url(${({ img }) => img});
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
`;

export const Feed = styled.div``;
export const Picture = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 6px solid #444a6a;

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;
