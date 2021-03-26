import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/"> Home</Link>
        <Link to="/project"> Projects</Link> */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/Project" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
