import {
  NavBar,
  Header,
  Logo,
  Menu,
  MenuLink,
  IconWrapper,
} from "./nav.styles";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles/theme";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Nav() {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };
  return (
    <Header>
      <Container>
        <NavBar>
          <Link to="/">
            <Logo>EXPLORE</Logo>
          </Link>
          <IconWrapper onClick={handleMobile}>
            {mobile ? <AiOutlineClose /> : <AiOutlineMenu />}
          </IconWrapper>

          <Menu mobile={mobile}>
            <Link to="/explore">
              <MenuLink>Explore</MenuLink>
            </Link>
            <Link to="/hotels">
              <MenuLink>Hotels</MenuLink>
            </Link>
            <Link to="/contactus">
              <MenuLink>Contact us</MenuLink>
            </Link>
            <Link to="/register">
              <MenuLink>Register</MenuLink>
            </Link>
            <Link to="/login">
              <MenuLink>Login</MenuLink>
            </Link>
          </Menu>
        </NavBar>
      </Container>
    </Header>
  );
}

export default Nav;
