import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import wireless from "./pages/wireless"
import network from "./pages/network"
import datacentre  from "./pages/datacentre";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/datacenterservices" component={datacentre} exact></Route>
        <Route path="/wirelessservices" component={wireless} exact></Route>
        <Route path="/networkservices" component={network} exact></Route>
      </Switch>
    </Router>
    //kalu da message dekh reya c
  );
}

export default App;
