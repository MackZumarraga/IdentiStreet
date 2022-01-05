import React from "react";
import { Link, Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./nav_bar/nav_bar";
import Home from "./home/home";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ListingsIndexContainer from "./listing_index_container"
import FooterContainer from "./footer/footer_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
      <HeaderContainer/>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/search/:filter" component={ListingsIndexContainer}/>
      {/* <ProtectedRoute exact path={`/account/:user_id`} component={AccountContainer}/> */}

      <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
      </Switch>
      <FooterContainer/>
    </div>
  );
  
  export default App;


  //mack - will be rendered for all routes in my app and where routes within this app will be defined