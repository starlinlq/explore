import { GlobalStyle } from "./globalStyles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Explore, Nav, Home, Register, Login, Footer } from "./components";
import { useEffect } from "react";
import { authenticate } from "./stores/user/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      dispatch(authenticate());
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Section>
          <Nav />
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Section>
      </Router>
    </>
  );
}

export default App;
