import { GlobalStyle } from "./globalStyles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Home, Register } from "./components";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/register">
            <Register />
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
