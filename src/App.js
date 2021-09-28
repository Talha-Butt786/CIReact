
import './App.css';
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import side1 from "./side1";
import side2 from "./side2";
import {Button} from "react-bootstrap";


function App() {
  return (
    <div className="App">
        <HashRouter>
            <ul>
                <li><Link to="/side1">Side 1</Link></li>
                <li><Link to="/side2">Side 2</Link></li>
            </ul>
            <Switch>
                <Route path="/side1" component={side1} />
                <Route path="/side2" component={side2} />
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
