import { GlobalStyle } from "./globalStyles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Home, Register, Login } from "./components";
import { useEffect } from "react";
import { authenticate } from "./stores/user/actions";
import { useDispatch } from "react-redux";

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
        <Nav />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
