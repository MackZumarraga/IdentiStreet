import React from "react";
import { Link, Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Modal from "./modal/modal";
import NavBar from "./nav_bar/nav_bar";
import Home from "./home/home";
import HeaderContainer from "./header/header_container";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";
import ListingsIndexContainer from "./listings/listing_index_container";
import ListingShowContainer from "./listings/listing_show_container";
import MyProfileContainer from "./profile/my_profile_container";
import ListingFormContainer from "./listing_form/listing_form_container";
// import ListingForm from "./listing_form/listing_form"
import FooterContainer from "./footer/footer_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
      <Modal/>
      <HeaderContainer/>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path={`/add`} component={ListingFormContainer}/> */}
      <ProtectedRoute exact path={`/my_profile`} component={MyProfileContainer}/>
      <ProtectedRoute exact path={`/add_listing`} component={ListingFormContainer}/>
      {/* <ProtectedRoute exact path={`/add`} component={ListingFormContainer}/> */}
      {/* <ProtectedRoute exact path={`/account/:user_id`} component={AccountContainer}/> */}

      <Switch>
        <Route path="/search" component={ListingsIndexContainer}/>
        <Route path="/listing/:id" component={ListingShowContainer}/>
        {/* <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/> */}
      </Switch>
      <FooterContainer/>
    </div>
  );
  
  export default App;


  //mack - will be rendered for all routes in my app and where routes within this app will be defined