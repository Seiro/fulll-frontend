import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CheckBox from "./component/checkbox/checkbox";
import Search from "./component/search/search";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/checkbox">Test Algo 1</Link>
            </li>
            <li>
              <Link to="/search">Test Algo 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/checkbox">
            <CheckBox />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
