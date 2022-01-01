import React from "react";
import { Link, Route, HashRouter, Routes } from "react-router-dom";
import { Provider } from "react";

import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
    <div>
      <header>
        <h1>IdentiStreet</h1>
        <HeaderContainer/>
      </header>

      <Routes>
            <Route path="/login" element={<LoginFormContainer/>}/>
            <Route path="/signup" element={<SignupFormContainer/>} />
      </Routes>
    </div>
  );
  
  export default App;


  //mack - will be rendered for all routes in my app and where routes within this app will be defined