import React from "react";
import { Link, Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
      <header>
        <Link to="/">
            <h1>IdentiStreet</h1>
        </Link>
      </header>

      <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HeaderContainer}/>
      </Switch>
    </div>
  );
  
  export default App;


  //mack - will be rendered for all routes in my app and where routes within this app will be defined