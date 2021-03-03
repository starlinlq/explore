import { GlobalStyle } from "./globalStyles/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Home } from "./components";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/test"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
