import styled, { keyframes } from "styled-components";

export const NavBar = styled.nav`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin: 0 5px;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 50px;
`;

export const Logo = styled.span`
  color: ${({ theme }) => theme.primaryFontColor};
  width: fit-content;
  text-decoration: none;
  padding: 0;
  transition: 0.3s;
  &:hover {
    color: #f93737;
  }
`;

export const IconWrapper = styled.div`
  display: none;
  color: #f93737;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export const MenuLink = styled.span`
  margin-left: 4rem;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryFontColor};

  &:hover {
    color: #f93737;
  }
`;

export const Menu = styled.div`
  @media screen and (max-width: 600px) {
    position: absolute;
    transition: 0.3s ease-in-out;
    background: rgba(25, 30, 55, 0.9);
    opacity: ${({ mobile }) => (mobile ? "1" : "0")};
    top: 50px;
    width: ${({ mobile }) => (mobile ? "100%" : "0")};

    height: 400px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;

    ${MenuLink} {
      display: block;
      width: fit-content;
      margin: auto;
      padding: 20px 0;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
