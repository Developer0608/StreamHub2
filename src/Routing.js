import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./component/Header";
import Otp from "./component/Otp";
import PasswordReset from "./component/PasswordReset";
import SetPassword from "./component/Setpassword";
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
        <Route path="/loginhelp" component={SetPassword} />
        <Route path="/otpvalidate" component={Otp} />
        <Route path="/reset-password" component={PasswordReset}/>
      </Switch>
    </Router>
  )
}

export default Routing;