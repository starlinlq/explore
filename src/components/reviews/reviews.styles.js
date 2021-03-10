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
export const Quote = styled.div`
  visibility: hidden;
  display: flex;
  position: relative;
  bottom: 70px;
  right: 110px;
  width: 300px;
  padding: 5px 0;
  background: white;
  border-radius: 7px;
  text-align: center;
  z-index: 999;

  @media screen and (max-width: 600px) {
    width: 210px;
    right: 80px;
    bottom: 100px;
  }
`;
export const Picture = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 6px solid #444a6a;

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }

  &:hover {
    ${Quote} {
      visibility: visible;
    }
  }
`;

export const Icon = styled.div`
  padding: 0 15px;
`;
export const Text = styled.span``;
