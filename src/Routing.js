import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./component/Header";
import Signin from "./component/Signin";
import Signup from "./component/Signup";

function Routing() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => isLoggedIn ? <App /> : <Signin />} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default Routing;