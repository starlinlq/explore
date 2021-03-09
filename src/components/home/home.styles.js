import styled from "styled-components";
import img from "../../images/home.jpg";
export const Wrapper = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  background-image: linear-gradient(
      0deg,
      rgba(25, 35, 55, 1) 1%,
      rgba(25, 35, 55, 0.7) 12%,
      rgba(25, 35, 55, 0.7) 5%
    ),
    url(${img});
`;
export const Title = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0;
  color: ${({ theme }) => theme.primaryFontColor};

  @media screen and (max-width: 600px) {
    font-size: ${({ fontMobile }) => fontMobile};
  }
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.secondaryFontColor};
  font-size: ${({ fontSize }) => fontSize};
  @media screen and (max-width: 600px) {
    font-size: ${({ fontMobile }) => fontMobile};
    margin: 25px 5px;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 200px;
  border-radius: 5px;
  background-color: #191e37;
  background: rgba(25, 30, 55, 0.7);
`;

export const Select = styled.span`
  color: white;
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 2px solid #f93737;
  transition: 0.2s ease-in-out;

  &:hover {
    padding-bottom: 6px;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;

  @media screen and (max-width: 800px) {
    ${Col} {
      margin: 0 5px;
    }
    margin-top: 5rem;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  margin: 0 10px;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin: 0 1px;

    ${Select} {
      font-size: 14px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
